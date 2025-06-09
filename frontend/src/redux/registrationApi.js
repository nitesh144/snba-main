
import supabase from "../SupaBaseClient";

export const checkExistingUser = async (phone) => {
  const phone_no = `91${phone}`; // Ensure no trailing space!

  try {
    const { data, error } = await supabase
      .from("users")
      .select("phone_number")
      .eq("phone_number", phone_no);

    if (error) throw error;
    return data;
  } catch (error) {
    console.log("Error checking existing users:", error);
    return [];
  }
};


const uploadImage = async(user_id,userPhoto)=>{
    try {
        const filepath = `profile_pics/${user_id}`;

        const {error}= await supabase.storage
        .from("users")
        .upload(filepath,userPhoto,{upsert:true});

        if(error){
            console.log("Error uploading image:", error);
            return null;
            
        }

        const {data} = await supabase.storage
        .from("users")
        .getPublicUrl(filepath);
        return data.publicUrl;

    } catch (error) {
        console.error("Unexpected error uploading image:", error);
        return null 
    }
}




export const createUserApi = async (formData) => {
    try {
const{data:{user},error:authError}=await supabase.auth.getUser();

        if(authError) throw authError;
        const user_id = user.id;

        const userPhoto =formData.photo;

        const ProfilePicUrl = await uploadImage(user_id,userPhoto)
        console.log(ProfilePicUrl);
        
        const {data, error} = await supabase
            .from("users")
            .insert([
             { user_id,
              name:formData. fullName,
              email:formData.email,
              phone_number:`91${formData.phone}`,
              profile_pic_url:ProfilePicUrl,
              role:"user",
              address_line:formData.address,
              city:formData.city,
              state:formData.state,
              postal_code:formData.pinCode
            }


            ])
           
            .single();
            if(error)throw error;
            return data;
    } catch (error) {
       console.log("Error creating user", error);
       throw error;
        
    }
}