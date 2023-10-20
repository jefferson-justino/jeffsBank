import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Switch, TouchableOpacity } from 'react-native';

import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

export default function App() {
  const [nome, setNome] = useState(' ')
  const [idade, setIdade] = useState(0)
  const [renda, setRenda] = useState(50)
  const [estuda, setEstuda] = useState(false)
  const [sexo, setSexo] = useState(0)
  const [sexos, setSexos] = useState([
    { sexoNome: 'masculino', valor: 1 },
    { sexoNome: 'feminino', valor: 2 }
  ])


  let sexoItems = sexos.map((v, k) => {
    return <Picker.Item key={k} value={k} label={v.sexoNome} />
  })

  function aberturaDeConta() {

    if (nome == '' || idade == '') {
      alert('Informe os valores corretamente!')
      return
    } else {
      alert('Seu nome é: ' + nome + '\n' +
        'Do sexo ' + sexos[sexo].sexoNome + '\n' +
        'Você tem ' + idade + ' e ' + (estuda ? ' é estudante' : ' não é estudante') + '\n' +
        'Seu limite vai ser de R$' + renda.toFixed(2)
      )
    }

  }


  return (
    <View style={styles.container}>

      <StatusBar style='dark' />

      <Text style={styles.titulo}> JEFFS BANK</Text>

      <View style={styles.conteudo}>

        <View style={styles.fomulario} >
          <TextInput placeholder='Informe seu nome' onChangeText={(Text) => setNome(Text)} style={styles.input} />

          <TextInput placeholder='Informe sua idade' keyboardType='numeric'
            onChangeText={(Text) => setIdade(Text)} style={styles.input} />


          <Text style={styles.texto}>Escolha seu sexo:</Text>
          <Picker
            selectedValue={sexo}
            onValueChange={(itemValue, itemIndex) => setSexo(itemValue)}>

                        {sexoItems}

            {/* <Picker.Item label='masculino' value='maculinos'/>
            <Picker.Item label='feminino' value='femininos'/> */}
          </Picker>


          <Text style={styles.texto}>você é estudante?</Text>

          <Switch
            trackColor={{ false: 'red', true: 'green' }}
            thumbColor={estuda ? 'green' : 'red'}
            value={estuda}
            onValueChange={setEstuda}/>



        
            <Text style={styles.texto}>Seu limite é: R${renda.toFixed(2)}</Text>
            <Slider style={{ width: 300, height: 40 }}
              value={renda}
              minimumValue={50}
              maximumValue={2000}
              maximumTrackTintColor='black'
              minimumTrackTintColor='red'
              thumbTintColor='blue'
              onValueChange={setRenda}
            />


            <TouchableOpacity onPress={aberturaDeConta} style={styles.botao}>
              <Text style={styles.texto}>cadastrar-se</Text>
            </TouchableOpacity>
       
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
    paddingTop: 30,
    backgroundColor: '#00e5e5'
  },
  titulo: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    borderBottomWidth: 1
  },
  fomulario: {
    paddingTop: 20,
    gap: 10,
    padding: 15,
    borderWidth: 1,
    borderRadius: 10,
    display: 'flex',

  },
  input: {
    borderWidth: 1,
    backgroundColor: '#00cbcc',
    padding:5
  },
  conteudo: {
    padding: 30,
    paddingTop: 100
  },
  texto: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  botao: {
    alignItems: 'center',
    backgroundColor: '#00cfd1',
    padding: 10,
    borderRadius: 15
  }

});
