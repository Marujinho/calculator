import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {

  const [calculation, setCalculation] = useState("")
  const [result, setResult] = useState(0)

  function validate(){
    const text = calculation
    switch (text.slice(-1)) {
      case '+':
      case '-':
      case '/':
      case '*':
        return false

    }
    return true
  }

  function buttonPressed(text){

      if(text == '='){
        return validate() && calculateResult(calculation) 
      }else{
        return setCalculation(calculation+text)
      }
  }

  function calculateResult(){
     const text = calculation

     setResult(eval(text))

  }

  function operate(operation){
      switch(operation){
        case 'DEL':


        let text = calculation.split('')
        text.pop()
        setCalculation(text.join(''))

        if(calculation == ""){
          setResult(0)
        }

        break

        case '+':
        case '-':
        case '/':
        case '*':

        const lastChar = calculation.split('').pop()

        if(operations.indexOf(lastChar) > 0) return
        if(calculation == '') return

        setCalculation(calculation+operation)

      }
  }

  let rows = []
  let nums = [[1,2,3], [4,5,6], [7,8,9], ['.', 0, '=']]
  for(let i = 0; i < 4; i++) {
      let row = []
      for(let j = 0; j < 3; j++) {
          row.push(<View style={styles.row}>
                   <TouchableOpacity onPress={() => buttonPressed(nums[i][j]) } style={styles.btn}>
                      <Text style={styles.btnText}>{nums[i][j]}</Text>
                   </TouchableOpacity>
                    </View>)
      }
      rows.push(<View style={styles.row}>{row}</View>)
  }

  let operations = ['DEL', '+', '-', '*', '/']
  let ops = []
  for(let i = 0; i <= 4; i++){
    ops.push(<TouchableOpacity onPress={() => operate(operations[i]) }>
                <Text style={styles.operationsText}>{operations[i]}</Text>
            </TouchableOpacity>)
  }


  return (
    <View style={styles.container}>
        <View style={styles.result}>
            <Text style={styles.resultText}>{calculation}</Text>
        </View>
        <View style={styles.calculation}>
            <Text style={styles.calculationText}>{result}</Text>
        </View>
        <View style={styles.buttons}>
            <View style={styles.numbers}>
                    {rows}
            </View>
            <View style={styles.operations}>
                {ops}
            </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  row:{
    flexDirection:'row',
    flex:1,
    justifyContent:'space-around',
    alignItems:'center'
  },
  btn:{
    flex:1,
    alignItems:'center',
    alignSelf:'stretch'
  },
  btnText:{
    fontSize:22,
    color:'white'
  },
  result:{
    marginTop:20,
    flex:2,
    backgroundColor:'white',
    alignItems:'flex-end'
  },
  resultText:{
    color:'black',
    fontSize:30
  },
  calculationText:{
    color:'white',
    fontSize:34
  },
  calculation:{
    flex:1,
    backgroundColor:'black',
    alignItems:'flex-end'
  },
  buttons:{
    flex:7,
    flexDirection:'row',
    backgroundColor:'honeydew'
  },
  numbers:{
    flex:3,
    backgroundColor:'#636363'
  },
  operations:{
    flex: 1,
    justifyContent:'space-around',
    backgroundColor:'#434343',
    alignItems:'center'
  },
  operationsText:{
    fontSize:30,
    color:'white'
  }

});
