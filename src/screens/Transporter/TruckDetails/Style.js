const React = require("react-native");
const { Platform } = React;

export default {
  /** Content **/
  bgLayout: {},
  bgImg: {
    position: "absolute",
    width: "100%",
    height: 220,
  },

  /** Header **/
  hTop: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 15,
    marginBottom: 15,
  },
  hImg: {
    fontSize: 64,
    color: "#FFD328",
  },
  hRow: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  hContent: {
    justifyContent: "center",
    marginLeft: 10,
  },
  hTopText: {
    fontSize: 20,
    fontFamily: "Montserrat-Regular",
    color: "#FFF",
    marginBottom: 5,
  },
  hTopDesc: {
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    color: "rgba(255,255,255,0.6)",
    marginBottom: 10,
  },
  /** Form **/
  regForm: {
    width: "100%",
    marginBottom: 15,
  },
  infoHeader: {
    backgroundColor: "#242A38",
    borderRadius: 3,
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  infoHeaderText: {
    fontFamily: "Montserrat-Regular",
    fontSize: 14,
    color: "#FFF",
  },
  infoBox: {
    backgroundColor: "#FFF",
    elevation: 10,
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowColor: "#999",
    shadowOpacity: 0.1,
    shadowRadius: 3,
    marginHorizontal: 20,
    marginBottom: 20,
    borderRadius: 3,
  },
  fSelect: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderColor: "rgba(36,42,56,0.05)",
  },
  fRow: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 5,
    ...Platform.select({
      ios: {
        paddingVertical: 10,
      },
    }),
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderColor: "rgba(36,42,56,0.05)",
  },
  fPicker: {
    flex: 1,
  },
  fPickerItem: {
    flex: 1,
    width: "100%",
    paddingTop: 0,
    paddingBottom: 0,
  },
  fIcon: {
    color: "rgba(36,42,56,0.4)",
    fontSize: 24,
  },
  fInput: {
    flex: 1,
    fontFamily: "Montserrat-Regular",
    fontSize: 12,
  },

  fBtn: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#FF8901",
    marginHorizontal: 15,
    paddingVertical: 15,
    paddingHorizontal: 15,
    marginBottom: 15,
    borderRadius: 3,
  },
  fBtnText: {
    fontFamily: "Montserrat-SemiBold",
    fontSize: 14,
    color: "#FFF",
  },
  fBtnIcon: {
    fontFamily: "Montserrat-Regular",
    fontSize: 16,
    color: "#FFF",
  },

  photos: {
    flex: 1,
    flexDirection: "row",
    padding: 15,
  },
  truckImg: {
    width: 90,
    height: 64,
    marginVertical: 5,
    marginHorizontal: 5,
    borderRadius: 3,
  },
  photoDelete: {
    position: "absolute",
    right: 5,
    top: 1,
    padding: 3,
    borderRadius: 3,
    backgroundColor: "#FF0000",
  },
  photoDeleteIcon: {
    fontSize: 14,
    color: "#FFF",
  },
  /** Trip List **/
  tripItem: {
    flex: 1,
    backgroundColor: "#FFF",
    elevation: 10,
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowColor: "#999",
    shadowOpacity: 0.1,
    shadowRadius: 3,
    marginHorizontal: 15,
    marginBottom: 20,
    borderRadius: 3,
  },
  truckInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderColor: "rgba(36,42,56,0.07)",
    borderBottomWidth: 1,
  },
  truckTrip: {
    fontSize: 12,
    fontFamily: "Montserrat-SemiBold",
    color: "rgba(36,42,56,1)",
  },
  truckData: {
    fontSize: 12,
    fontFamily: "Montserrat-Regular",
    color: "rgba(36,42,56,0.7)",
  },
  checkIcon: {
    fontSize: 20,
    color: "rgba(36,42,56,0.4)",
  },
  truckImg: {
    width: 100,
    height: 75,
    borderRadius: 3,
  },
  tripInfo: {
    borderColor: "rgba(36,42,56,0.07)",
    borderBottomWidth: 1,
    padding: 10,
  },
  rowSpaceAlignment: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  tripPlaces: {
    flex: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  tripIcon: {
    fontSize: 24,
    paddingHorizontal: 5,
  },
  placeText: {
    fontSize: 12,
    fontFamily: "Montserrat-Regular",
    marginLeft: 10,
    color: "rgba(36,42,56,0.9)",
  },
  lineTracker: {
    fontSize: 18,
    color: "#ffcc00",
    marginLeft: 17,
    top: 20,
    position: "absolute",
  },
  editBtn: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F1F2F6",
    borderRadius: 5,
    margin: 10,
    padding: 5,
  },
  editIcon: {
    fontSize: 14,
    paddingLeft: 5,
    color: "rgba(36,42,56,0.9)",
  },
  editText: {
    fontSize: 10,
    fontFamily: "Montserrat-Regular",
    paddingHorizontal: 5,
    color: "rgba(36,42,56,0.9)",
  },
};
