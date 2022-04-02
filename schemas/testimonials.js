export default {
  name: "testimonials",
  title: "Testimonials",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: String,
    },
    {
      name: "company",
      title: "Company",
      type: String,
    },
    {
      name: "imageUrl",
      title: "ImgURL",
      type: "imageUrl",
      options: {
        hotspot: true,
      },
    },
    {
      name: "feedback",
      title: "Feedback",
      type: String,
    },
  ],
};
