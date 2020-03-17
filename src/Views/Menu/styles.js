import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',

    backgroundColor: 'transparent',
  },
  gridView: {
    marginTop: 20,
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 10,
    height: 150,
  },
  itemName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 1,
    color: '#fff',
  },
  userImage: {
    width: 50,
    height: 50,
    marginHorizontal: 15,
  },
  foregroundContainer: {
    width: Dimensions.get('window').width,
    height: 140,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoutButton: {
    position: 'absolute',
    top: 60,
    right: 15,
  },
});

export default styles;
