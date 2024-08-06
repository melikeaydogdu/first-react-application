import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  contanier: {
    flex: 1,
    backgroundColor: '#40e0d0',
  },
  container: {
    backgroundColor: 'white',
    margin: 10,
    borderWidth: 2,
    borderColor: 'dimgray',
    borderRadius: 10, //kenar yumuşatma
    marginTop: 20,
  },
  body: {
    padding: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    margin: 10,
    color: 'black',
  },
  text: {
    fontSize: 21,
    margin: 10,
    marginTop: 3,
    color: 'black',
    fontStyle: 'italic',
  },
  button_container: {
    backgroundColor: 'silver',
    padding: 10,
    alignItems: 'center',
    fontWeight: 'bold',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  button_title: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 19,
  },
});
