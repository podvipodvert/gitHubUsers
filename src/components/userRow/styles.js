import { StyleSheet } from 'react-native';
import Colors from '../../assets/colors';

export default StyleSheet.create({
  userRow: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    marginTop: 5
  },
  infoRow: {
    flex: 1,
    paddingLeft: 10
  },
  login: {
    fontSize: 16,
    color: Colors.purple,
    marginLeft: 2
  },
  loginTitle: {
    fontSize: 16,
  },
  row: {
    flexDirection: 'row'
  },
  link: {
    color: Colors.blue,
    textDecorationLine: 'underline'
  },
  image: {
    height: 100,
    width: 100,
    resizeMode: 'contain'
  }
});
