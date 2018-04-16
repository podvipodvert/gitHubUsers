import { StyleSheet } from 'react-native';
import Colors from '../../assets/colors';

export default StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: 25
  },
  loadButton: {
    backgroundColor: Colors.gitHubGreen,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 55,
    shadowOffset: { width: 1, height: 1, },
    shadowColor: '#000',
    shadowOpacity: 0.5,
    elevation: 5,
    alignSelf: 'stretch'
  },
  buttonText: {
    fontSize: 16,
    color: Colors.white
  }

});
