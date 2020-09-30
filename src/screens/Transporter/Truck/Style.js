const React = require('react-native')
const { Platform } = React

export default {
  /** Content **/
  bgLayout: {
    
  },
  bgImg: {
    position: 'absolute',
    width: '100%',
    height: 220
  },

  /** Header **/
  hTop: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 15,
    marginBottom: 15
  },
  hImg: {
    fontSize: 64,
    color: '#FFD328'
  },
  hRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  hContent: {
    justifyContent: 'center',
    marginLeft: 10
  },
  hTopText: {
    fontSize: 20,
    fontFamily: 'Montserrat-Regular',
    color: '#FFF',
    marginBottom: 5
  },
  hTopDesc: {
    fontSize: 11,
    fontFamily: 'Montserrat-Regular',
    color: 'rgba(255,255,255,0.6)',
    marginBottom: 10
  },
  addBtn: {
    backgroundColor: '#FF8901',
    borderRadius: 3,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 0
  },
  addText: {
    fontSize: 11,
    fontFamily: 'Montserrat-Regular',
    color: '#FFF'
  },

  /** Trip List **/
  truckItem: {
    flex: 1,
    backgroundColor: '#FFF',
    elevation: 10,
    shadowOffset: {
      width: 10,
      height: 10
    },
    shadowColor: '#999',
    shadowOpacity: 0.1,
    shadowRadius: 3,
    marginHorizontal: 15,
    marginBottom: 20,
    borderRadius: 3
  },
  truckInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderColor: 'rgba(36,42,56,0.08)',
    borderBottomWidth: 1
  },
  truckContent: {
    flex: 1
  },
  truckImg: {
    width: 100,
    height: 75,
    marginRight: 10,
    borderRadius: 3
  },
  truckBrand: {
    width: '100%',
    borderColor: 'rgba(36,42,56,0.08)',
    borderBottomWidth: 1
  },
  truckName: {
    fontSize: 14,
    fontFamily: 'Montserrat-Regular',
    marginBottom: 5,
    color: 'rgba(36,42,56,0.99)'
  },
  rowAlignment: {
    flexDirection: 'row',
    marginTop: 5
  },
  truckNum: {
    flex: 5,
    fontSize: 11,
    fontFamily: 'Montserrat-Regular',
    color: 'rgba(36,42,56,0.7)'
  },
  truckData: {
    flex: 5,
    fontSize: 11,
    fontFamily: 'Montserrat-Regular',
    color: 'rgba(36,42,56,0.99)'
  },
  truckEdit: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10
  },
  truckPosted: {
    fontSize: 11,
    fontFamily: 'Montserrat-Regular',
    color: 'rgba(36,42,56,0.6)'
  },

  editBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F1F2F6',
    borderRadius: 5,
    padding: 5,
    marginLeft: 5
  },
  editIcon: {
    fontSize: 14,
    paddingLeft: 5,
    color: 'rgba(36,42,56,0.9)'
  },
  editText: {
    fontSize: 10,
    fontFamily: 'Montserrat-Regular',
    paddingHorizontal: 5,
    color: 'rgba(36,42,56,0.9)'
  }
}
