import React, {useState, useEffect, useCallback} from 'react';
import {
  ScrollView,
  PageText,
  Button,
  ToggleButtonContainer,
  HeaderTextField,
  Container,
  RadioButtonContainer,
  CheckBoxContainer,
  SectionTitle,
  PictureBox,
  ImageStyled,
  PictureText,
  PictureIcon,
} from './styles.js';
import ToggleButton from './../../components/ToggleButton';
import Input from './../../components/Input';
import RadioButton from './../../components/RadioButton';
import CheckBox from './../../components/CheckBox';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import {View, TouchableOpacity, Platform} from 'react-native';
import ImagePicker from 'react-native-image-picker/lib/commonjs';
import RNFetchBlob from 'rn-fetch-blob';
import {useAuth} from '../../hooks/auth'
import { useRoute, useNavigation, Alert } from '@react-navigation/native';

const RegisterAnimal = () => {
  const navigation = useNavigation();
  
  // hooks context
  const {user} = useAuth()

  // Form type state
  const [formType, setFormType] = useState('adocao')
  const [image, setImage] = useState(null);

  // State de Loading
  const [loading, setLoading] = useState(false);

  // Animal data state
  const [animal, setAnimal] = useState({
      owner: user.uid,
      personality : {
        brincalhao : false,
        timido: false,
        calmo: false
      },
      temper : {
        guarda : false,
        amoroso: false,
        preguiçoso: false
      },
      health : {
        vacinado : false,
        vermifugado: false,
        castrado: false,
        doente: false
      },
      adoption : {
        terms : false,
        housePhotos: false,
        previousVisit: false,
        postAdoptionFollowup: false,
        followupMonths: 0
      },
      sponsorship : {
        terms : false,
        financialSupport: false,
        food: false,
        health: false,
        objects: false,
        visits: false
      },
      help : {
        food : false,
        financialSupport: false,
        medication: false,
        objects: false
      }
})

  const getTitle = useCallback(
    () => {
    if (formType === "adocao"){
      return "Adoção"
    }

    if (formType === "apadrinhar"){
      return "Apadrinhar"
    }

    if (formType === "ajuda"){
      return "Ajudar"
    }
  }, [formType])

  const setAnimalInfo = useCallback(
    (key, value) => {
     setAnimal(animal => {
       let newAnimal = {...animal}
       newAnimal[key] = value
       return newAnimal
      })
    }, [setAnimal]
  )

  const setAnimalCheckBox = useCallback(
    (field, value) => {
     setAnimal(animal => {
       animal[field][value] = !animal[field][value]
       return {...animal}})
    }, [setAnimal]
  )

  const setAnimalCheckBoxValue = useCallback(
    (field, key, value) => {
     setAnimal(animal => {
       if (animal[field][key] === value) {
          animal[field][key] = 0
       }
       else {
          animal[field][key] = value
       }
       
       return {...animal}})
    }, [setAnimal]
  )

  const submit = useCallback(
    () => {
      firestore()
      .collection('animal')
      .add({formType, ...animal})
      .then(() => {
        navigation.navigate('registersuccess')
      })
      .catch((error) => {
        setLoading(false)
        Alert.alert("Falha ao Carregar a Imagem!\nTente Novamente.")
        console.log(error);
      })
    }, [formType, animal, setLoading]
  )

  // Selecionar a Imagem da galeria
  const selectImage = useCallback( () => {
    const options = {
      maxWidth: 2000,
      maxHeight: 2000,
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = {uri: response.uri};
        setImage(source);
      }
    });
  }, [setImage])

  async function getPathForFirebaseStorage(uploadUri) {
    if (Platform.OS === 'ios') return uploadUri;
    const stat = await RNFetchBlob.fs.stat(uploadUri);
    return stat.path;
  }

  // Upload da imagem para o Firebase
  const uploadImage = useCallback( async () => {
    setLoading(true)
    const {uri} = image;
    const date = new Date().toString();
    
    const filename = uri.substring(uri.lastIndexOf('/') + 1);
    const uploadUri = Platform.OS === 'ios' ? uri.replace('file://', '') : uri;

    try {
      const fileUri = await getPathForFirebaseStorage(uploadUri);

      const snapshot = await storage()
        .ref(`animals/${filename}-${date}`)
        .putFile(fileUri)

      
      const url = await storage().ref(`animals/${filename}-${date}`).getDownloadURL();
      setAnimal(oldAnimal => {
        oldAnimal["photo"] = url
        return {...oldAnimal}
      })
      submit();
    } catch(e) {
      setLoading(false)
      Alert.alert("Falha ao Carregar a Imagem!\nTente Novamente.")
      console.log('Error during upload. ', e)
    }
  }, [setAnimal, image, setLoading, animal])

  return (
    <Container>
      <ScrollView>

        <HeaderTextField>
          Tenho interesse em cadastrar o animal para:
        </HeaderTextField>

        <ToggleButtonContainer>
          <ToggleButton textColor='#434343' selected={formType === 'adocao'} onPress={() => setFormType('adocao')}>
            ADOÇÃO
          </ToggleButton>

          <ToggleButton textColor='#434343' selected={formType === 'apadrinhar'} onPress={() => setFormType('apadrinhar')}>
            APADRINHAR
          </ToggleButton>

          <ToggleButton textColor='#434343' selected={formType === 'ajuda'} onPress={() => setFormType('ajuda')}>
            AJUDA
          </ToggleButton>
        </ToggleButtonContainer>

        <PageText>
          {getTitle()}
        </PageText>

        <SectionTitle>
          NOME DO ANIMAL
        </SectionTitle>

        <Input
          placeholder="Nome do animal"
          onChangeText={(value) => setAnimal(animal => ({
                                        ...animal, 
                                        name: value}))}
        />

        <SectionTitle>
          FOTOS DO ANIMAL
        </SectionTitle>

        <TouchableOpacity onPress={selectImage}>
          <PictureBox>
            {
              image ? 
              <ImageStyled source={{uri:image.uri}} />
              :
              <>
                <PictureIcon
                  name="plus-circle"
                  color={'#757575'}
                  size={24}
                />
                <PictureText>
                  adicionar foto
                </PictureText>
              </>
            }
            
          </PictureBox>
        </TouchableOpacity>

        <SectionTitle>
          ESPÉCIE
        </SectionTitle>

        <RadioButtonContainer>
          <RadioButton selected={animal.type === "cachorro"} onPress={() => setAnimalInfo("type", "cachorro")}>Cachorro</RadioButton>
          <RadioButton selected={animal.type === "gato"} onPress={() => setAnimalInfo("type", "gato")}>Gato</RadioButton>
        </RadioButtonContainer>

        <SectionTitle>
          SEXO
        </SectionTitle>

        <RadioButtonContainer>
          <RadioButton selected={animal.sex === "macho"} onPress={() => setAnimalInfo("sex", "macho")}>Macho</RadioButton>
          <RadioButton selected={animal.sex === "femea"} onPress={() => setAnimalInfo("sex", "femea")}>Fêmea</RadioButton>
        </RadioButtonContainer>

        <SectionTitle>
          PORTE
        </SectionTitle>

        <RadioButtonContainer>
          <RadioButton selected={animal.size === "pequeno"} onPress={() => setAnimalInfo("size", "pequeno")}>Pequeno</RadioButton>
          <RadioButton selected={animal.size === "medio"} onPress={() => setAnimalInfo("size", "medio")}>Médio</RadioButton>
          <RadioButton selected={animal.size === "grande"} onPress={() => setAnimalInfo("size", "grande")}>Grande</RadioButton>
        </RadioButtonContainer>

        <SectionTitle>
          IDADE
        </SectionTitle>

        <RadioButtonContainer>
          <RadioButton selected={animal.age === "filhote"} onPress={() => setAnimalInfo("age", "filhote")}>Filhote</RadioButton>
          <RadioButton selected={animal.age === "adulto"} onPress={() => setAnimalInfo("age", "adulto")}>Adulto</RadioButton>
          <RadioButton selected={animal.age === "idoso"} onPress={() => setAnimalInfo("age", "idoso")}>Idoso</RadioButton>
        </RadioButtonContainer>

        <SectionTitle>
          TEMPERAMENTO
        </SectionTitle>

        <CheckBoxContainer>
          <CheckBox selected={animal.personality.brincalhao} onPress={() => setAnimalCheckBox("personality", "brincalhao")}>Brincalhão</CheckBox>
          <CheckBox selected={animal.personality.timido} onPress={() => setAnimalCheckBox("personality", "timido")}>Tímido</CheckBox>
          <CheckBox selected={animal.personality.calmo} onPress={() => setAnimalCheckBox("personality", "calmo")}>Calmo</CheckBox>
        </CheckBoxContainer>

        <CheckBoxContainer>
          <CheckBox selected={animal.temper.guarda} onPress={() => setAnimalCheckBox("temper", "guarda")}>Guarda</CheckBox>
          <CheckBox selected={animal.temper.amoroso} onPress={() => setAnimalCheckBox("temper", "amoroso")}>Amoroso</CheckBox>
          <CheckBox selected={animal.temper.preguiçoso} onPress={() => setAnimalCheckBox("temper", "preguiçoso")}>Preguiçoso</CheckBox>
        </CheckBoxContainer>

        <SectionTitle>
          SAÚDE
        </SectionTitle>

        <CheckBoxContainer>
          <CheckBox selected={animal.health.vacinado} onPress={() => setAnimalCheckBox("health", "vacinado")}>Vacinado</CheckBox>
          <CheckBox selected={animal.health.vermifugado} onPress={() => setAnimalCheckBox("health", "vermifugado")}>Vermifugado</CheckBox>
        </CheckBoxContainer>

        <CheckBoxContainer>
          <CheckBox selected={animal.health.castrado} onPress={() => setAnimalCheckBox("health", "castrado")}>Castrado</CheckBox>
          <CheckBox selected={animal.health.doente} onPress={() => setAnimalCheckBox("health", "doente")}>Doente</CheckBox>
        </CheckBoxContainer>

        <Input
          placeholder="Doenças do animal"
          onChangeText={(value) => setAnimal(animal => ({
            ...animal, 
            diseases: value}))}
        />

      {/* Sessão para Adoção apenas! */}
      { formType === "adocao" ?
      <View>
        <SectionTitle>
          EXIGÊNCIAS PARA ADOÇÃO
        </SectionTitle>

        <CheckBox selected={animal.adoption.terms} onPress={() => setAnimalCheckBox("adoption", "terms")}>Termo de adoção</CheckBox>
        <CheckBox selected={animal.adoption.housePhotos} onPress={() => setAnimalCheckBox("adoption", "housePhotos")}>Fotos da casa</CheckBox>
        <CheckBox selected={animal.adoption.previousVisit} onPress={() => setAnimalCheckBox("adoption", "previousVisit")}>Visita prévia ao animal</CheckBox>
        <CheckBox selected={animal.adoption.postAdoptionFollowup} onPress={() => setAnimalCheckBox("adoption", "postAdoptionFollowup")}>Acompanhamento pós adoção</CheckBox>

        <CheckBox selected={animal.adoption.followupMonths === 1} onPress={() => setAnimalCheckBoxValue("adoption", "followupMonths", 1)}>1 mês</CheckBox>
        <CheckBox selected={animal.adoption.followupMonths === 3} onPress={() => setAnimalCheckBoxValue("adoption", "followupMonths", 3)}>3 meses</CheckBox>
        <CheckBox selected={animal.adoption.followupMonths === 6} onPress={() => setAnimalCheckBoxValue("adoption", "followupMonths", 6)}>6 meses</CheckBox>

        <SectionTitle>
          SOBRE O ANIMAL
        </SectionTitle>

        <Input
          placeholder="Compartilhe a história do animal"
          onChangeText={(value) => setAnimal(animal => ({
            ...animal, 
            history: value}))}
        />

        <Button 
          color="#ffd358" 
          textColor="#434343" 
          loading={loading}
          onPress={() => 
            uploadImage()
            }
        >
          COLOCAR PARA ADOÇÃO
        </Button>
       
        </View>
        : <View></View>}
        {/* Fim da Sessão para Adoção! */}

        {/* Sessão para Apadrinhamento apenas! */}
      { formType === "apadrinhar" ?
      <View>
        <SectionTitle>
          EXIGÊNCIAS PARA APADRINHAMENTO
        </SectionTitle>

        <CheckBox selected={animal.sponsorship.terms} onPress={() => setAnimalCheckBox("sponsorship", "terms")}>Termo de apadrinhamento</CheckBox>
        <CheckBox selected={animal.sponsorship.financialSupport} onPress={() => setAnimalCheckBox("sponsorship", "financialSupport")}>Auxílio financeiro</CheckBox>
        

        <CheckBox selected={animal.sponsorship.food} onPress={() => setAnimalCheckBox("sponsorship", "food")}>Alimentação</CheckBox>
        <CheckBox selected={animal.sponsorship.health} onPress={() => setAnimalCheckBox("sponsorship", "health")}>Saúde</CheckBox>
        <CheckBox selected={animal.sponsorship.objects} onPress={() => setAnimalCheckBox("sponsorship", "objects")}>Objetos</CheckBox>

        <CheckBox selected={animal.sponsorship.visits} onPress={() => setAnimalCheckBox("sponsorship", "visits")}>Visitas ao animal</CheckBox>

        <SectionTitle>
          SOBRE O ANIMAL
        </SectionTitle>

        <Input
          placeholder="Compartilhe a história do animal"
          onChangeText={(value) => setAnimal(animal => ({
            ...animal, 
            history: value}))}
        />

        <Button 
          color="#ffd358" 
          textColor="#434343" 
          loading={loading}
          onPress={() => 
            uploadImage()
          }
        >
          PROCURAR PADRINHO
        </Button>
       
        </View>
        : <View></View>}
        {/* Fim da Sessão para Apadrinhamento! */}

        {/* Sessão para Ajuda apenas! */}
      { formType === "ajuda" ?
      <View>
        <SectionTitle>
          NECESSIDADES DO ANIMAL
        </SectionTitle>

        <CheckBox selected={animal.help.food} onPress={() => setAnimalCheckBox("help", "food")}>Alimento</CheckBox>
        <CheckBox selected={animal.help.financialSupport} onPress={() => setAnimalCheckBox("help", "financialSupport")}>Auxílio financeiro</CheckBox>
        <CheckBox selected={animal.help.medication} onPress={() => setAnimalCheckBox("help", "medication")}>Medicamento</CheckBox>
        
        <Input
          placeholder="Nome do medicamento"
          onChangeText={(value) => setAnimal(animal => ({
            ...animal, 
            medicationName: value}))}
        />
        
        <CheckBox selected={animal.help.objects} onPress={() => setAnimalCheckBox("help", "objects")}>Objetos</CheckBox>
        
        <Input
          placeholder="Especifique o(s) objeto(s)"
          onChangeText={(value) => setAnimal(animal => ({
            ...animal, 
            objectsExpecification: value}))}
        />
        
        <SectionTitle>
          SOBRE O ANIMAL
        </SectionTitle>

        <Input
          placeholder="Compartilhe a história do animal"
          onChangeText={(value) => setAnimal(animal => ({
            ...animal, 
            history: value}))}
        />

        <Button 
          color="#ffd358" 
          textColor="#434343" 
          loading={loading}
          onPress={() => 
              uploadImage()
            }
        >
          PROCURAR AJUDA
        </Button>
       
        </View>
        : <View></View>}
        {/* Fim da Sessão para Ajuda! */}

      </ScrollView>
    </Container >
  );
};

export default RegisterAnimal;