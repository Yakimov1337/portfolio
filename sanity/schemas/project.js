export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: "title",
      title: "Title",
      description:"Title of the project",
      type: "string"
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      }
    },
    {
      name: "summary",
      title: "Summary",
      type: "string"
    },
    {
      name: "technologies",
      title: "Technologies",
      type: "array",
      of:[{type:"reference",to: {type:"skills"}}]
    },
    {
      name: "linkToBuild",
      title: "LinkToBuild",
      type: "url",
    },
  ],
}
