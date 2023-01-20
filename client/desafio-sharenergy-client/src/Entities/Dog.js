import ApiCrud from "../Api/ApiCrud";

const Dog = {
  url: "https://random.dog/",
  getDog: () => ApiCrud("https://", "dog").getById("random.dog", "woof"),
};

export default Dog;
