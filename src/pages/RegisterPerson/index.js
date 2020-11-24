import React, {useState, useEffect, useCallback} from 'react';
import {TouchableOpacity, Platform, Alert} from 'react-native';
import {
  ScrollView,
  Container,
  InfoBox,
  InfoSection,
  InfoContent,
  SectionTitle,
  SectionSeparator,
  Button,
  PictureBox,
  PictureText,
  PictureIcon,
  ImageStyled,
} from './styles.js';
import Input from './../../components/Input';
import storage from '@react-native-firebase/storage';
import ImagePicker from 'react-native-image-picker/lib/commonjs';
import RNFetchBlob from 'rn-fetch-blob';
import {useAuth} from '../../hooks/auth'

const RegisterPerson = () => {
  // State de Person
  const [person, setPerson] = useState();

  // State de Loading
  const [loading, setLoading] = useState(false);

  // hooks context
  const {signUp} = useAuth()

  // State de Image
  const [image, setImage] = useState(null);

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
        .ref(`users/${filename}-${date}`)
        .putFile(fileUri)

      
      const url = await storage().ref(`users/${filename}-${date}`).getDownloadURL();
      setPerson(oldPerson => {
        oldPerson["photo"] = {url: url, path: 'users/' + filename + '-' + date}
        return {...oldPerson}
      })

      signUp(person);
    } catch(e) {
      setLoading(false)
      Alert.alert("Falha ao Cadastrar o Usuário!\nTente Novamente")
      console.log('Error during upload. ', e)
    }
  }, [setPerson, image, person, setLoading])

  return (
    <Container>
      <ScrollView>
        <InfoSection>
          <InfoBox>
            <InfoContent>
              As informações preenchidas serão divulgadas apenas para a pessoa
              com a qual você realizar o processo de adoção e/ou apadrinhamento,
              após a formalização do processo.
            </InfoContent>
          </InfoBox>
        </InfoSection>

        <SectionSeparator>
          <SectionTitle>INFORMAÇÕES PESSOAIS</SectionTitle>

          <Input
            placeholder="Nome completo"
            onChangeText={(value) =>
              setPerson((person) => ({
                ...person,
                name: value,
              }))
            }
          />

          <Input
            placeholder="Idade"
            onChangeText={(value) =>
              setPerson((person) => ({
                ...person,
                age: value,
              }))
            }
          />

          <Input
            placeholder="E-mail"
            onChangeText={(value) =>
              setPerson((person) => ({
                ...person,
                email: value,
              }))
            }
          />

          <Input
            placeholder="Estado"
            onChangeText={(value) =>
              setPerson((person) => ({
                ...person,
                state: value,
              }))
            }
          />

          <Input
            placeholder="Cidade"
            onChangeText={(value) =>
              setPerson((person) => ({
                ...person,
                city: value,
              }))
            }
          />

          <Input
            placeholder="Endereço"
            onChangeText={(value) =>
              setPerson((person) => ({
                ...person,
                address: value,
              }))
            }
          />

          <Input
            placeholder="Telefone"
            onChangeText={(value) =>
              setPerson((person) => ({
                ...person,
                phone: value,
              }))
            }
          />
        </SectionSeparator>

        <SectionSeparator>
          <SectionTitle>INFORMAÇÕES DE PERFIL</SectionTitle>

          <Input
            placeholder="Nome de usuário"
            onChangeText={(value) =>
              setPerson((person) => ({
                ...person,
                username: value,
              }))
            }
          />

          <Input
            placeholder="Senha"
            secureTextEntry={true}
            onChangeText={(value) =>
              setPerson((person) => ({
                ...person,
                password: value,
              }))
            }
          />

          <Input placeholder="Confirmação de senha" secureTextEntry={true} />
        </SectionSeparator>

        <SectionSeparator>
          <SectionTitle>FOTO DE PERFIL</SectionTitle>
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
        </SectionSeparator>

        <SectionSeparator>
          <Button
            color="#88c9bf"
            textColor="#434343"
            loading={loading}
            onPress={() => uploadImage()}
          >
            FAZER CADASTRO
          </Button>
        </SectionSeparator>
      </ScrollView>
    </Container>
  );
};

export default RegisterPerson;
