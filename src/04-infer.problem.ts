// CODE

import { z } from "zod";

const StarWarsPerson = z.object({
  name: z.string(),
});

const StarWarsPeopleResults = z.object({
  results: z.array(StarWarsPerson),
});

type myType = z.infer<typeof StarWarsPeopleResults>

const logStarWarsPeopleResults = (data: myType) => {
  //                                   ^ 🕵️‍♂️
  data.results.map((person) => {
    console.log(person.name);
  });
};
