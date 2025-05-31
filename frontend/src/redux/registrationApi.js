import supabase from "../SupaBaseClient";

export const checkExistingUser = async (phone) => {
  try {
    const { data, error } = await supabase
      .from("users")
      .select("phone_number")
      .eq("phone_number", phone);

    if (error) throw error;
    return data;
  } catch (error) {
    console.log("Error to checking existing employees", error);
  }
};