/* eslint-disable prettier/prettier */
import React, {useState, useEffect, useCallback} from 'react';
import {TouchableOpacity, Platform} from 'react-native';
import {
  ScrollView,
  Container,
  InfoBox,
  InfoSection,
  InfoContent,
  SectionTitle,
  SectionSeparator,
  Button,
  Header,
  HeaderTitle,
  PictureBox,
  PictureText,
  PictureIcon,
} from './styles.js';
import Input from './../../components/Input';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import ImagePicker from 'react-native-image-picker/lib/commonjs';
import RNFetchBlob from 'rn-fetch-blob';

const RegisterPerson = () => {
  // State de Person
  const [person, setPerson] = useState();

  // State de Image
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [transferred, setTransferred] = useState(0);
  var url;

  // Callback do envio do objeto
  const submit = useCallback(() => {
    firestore()
      .collection('usuario')
      .add({person})
      .then((doc) => {
        console.log('Person added! ID: ' + doc.id);
        console.log(JSON.stringify(person));
      })
      .catch((error) => {
        console.log(error);
      });
  }, [person]);

  // Selecionar a Imagem da galeria
  const selectImage = () => {
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
  };

  async function getPathForFirebaseStorage(uploadUri) {
    if (Platform.OS === 'ios') return uploadUri;
    const stat = await RNFetchBlob.fs.stat(uploadUri);
    return stat.path;
  }

  // Upload da imagem para o Firebase
  const uploadImage = async () => {
    const {uri} = image;
    console.log('Image URI: ' + uri);
    const filename = uri.substring(uri.lastIndexOf('/') + 1);
    const uploadUri = Platform.OS === 'ios' ? uri.replace('file://', '') : uri;
    const fileUri = await getPathForFirebaseStorage(uploadUri);

    const task = storage()
      .ref(`users/${filename}`)
      .putFile(fileUri)
      .then((snapshot) => {
        console.log(`${filename} has been successfully uploaded.`);
        url = storage().ref(`users/${filename}`).getDownloadURL();
        console.log('Image URL: ' + JSON.stringify(url));
        setPerson((person) => ({
          ...person,
          photo: url,
        }));
      })
      .catch((e) => console.error('Error during upload. ', e));
  };

  // Pega o URL da imagem
  // const getUrl = async () => {
  //   url = await storage().ref(`users/${filename}`).getDownloadURL();
  //   console.log('Image URL: ' + url);
  // };

  return (
    <Container>
      <Header>
        <HeaderTitle>Cadastro Pessoal</HeaderTitle>
      </Header>
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
              <PictureIcon
                name={image ? 'check' : 'plus-circle'}
                color={'#757575'}
                size={24}
              />
              <PictureText>
                {image ? 'foto selecionada' : 'adicionar foto'}
              </PictureText>
            </PictureBox>
          </TouchableOpacity>
        </SectionSeparator>

        <SectionSeparator>
          <Button
            color="#88c9bf"
            textColor="#434343"
            onPress={() => {
              uploadImage();
              submit();
            }}>
            FAZER CADASTRO
          </Button>
        </SectionSeparator>
      </ScrollView>
    </Container>
  );
};

export default RegisterPerson;
