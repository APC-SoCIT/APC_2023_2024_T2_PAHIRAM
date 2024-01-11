import PahiramAxiosConfig from "../PahiramAxiosConfig";
const bearerToken = "17|uy3CFctyKWFfjn0rpbQKlFbUQkIE0f1Si15zVeMW062a617a";
const SearchItemAPI = async (officeCode) => {
  try {
    const response = await PahiramAxiosConfig.get(
      `/office/${officeCode}/item-model-list`,
      {
        headers: {
          Authorization: `Bearer ${bearerToken}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error searching item:", error);
    return null;
  }
};

export default SearchItemAPI;
