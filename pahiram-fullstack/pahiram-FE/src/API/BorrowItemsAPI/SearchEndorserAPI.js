import ApcisAxiosConfig from "../ApcisAxiosConfig";

const bearerToken = "5|CcW29NQdih3SUokRffPz9aDHrDO3zW11puv2qMzTdefc2be5";
const SearchEndorserAPI = async (name) => {
  try {
    const response = await ApcisAxiosConfig.get(`/users/search/${name}`, {
      headers: {
        Authorization: `Bearer ${bearerToken}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error searching endorser:", error);
    return null;
  }
};

export default SearchEndorserAPI;
