import teamMember from "@/models/team-members";

interface TenureEntry {
  description: string,
  teamMembers: teamMember[]
}

export const tenureList: Record<string,  TenureEntry> = {

  "2021-2022":{
  
    description:"Blah Blah blah Blah Blah",
    teamMembers:
    [
    {
      name: "Ben George Netto",
      imageURL: "/assets/images/team-photos/bengeorgenetto.png",
      role: "Visual Designer",
      team: "Design Team",
      socials: {
        twitter: "ritin_george",
        linkedin: "ritin-george",
        instagram: "ritin_george",
        website: "ritin-george.me",
      },
    },

    {
      name: "Ben George Netto",
      imageURL: "/assets/images/team-photos/bengeorgenetto.png",
      role: "Visual Designer",
      team: "Design Team",
      socials: {
        twitter: "ritin_george",
        linkedin: "ritin-george",
        instagram: "ritin_george",
        website: "ritin-george.me",
      },
    },

    {
      name: "Ben George Netto",
      imageURL: "/assets/images/team-photos/bengeorgenetto.png",
      role: "Visual Designer",
      team: "Design Team",
      socials: {
        twitter: "ritin_george",
        linkedin: "ritin-george",
        instagram: "ritin_george",
        website: "ritin-george.me",
      },
    },
  ],

},

  "2022-2023":{

    description:"The 2021-2022 team was a group of talented individuals who worked together to create a platform that would help students keep their heads in the clouds while having their feet on the ground.",
    teamMembers:[
    {
      name: "Ben George Netto",
      imageURL: "/assets/images/team-photos/bengeorgenetto.png",
      role: "Visual Designer",
      team: "Design Team",
      socials: {
        twitter: "ritin_george",
        linkedin: "ritin-george",
        instagram: "ritin_george",
        website: "ritin-george.me",
      },
    },

    {
      name: "Ben George Netto",
      imageURL: "/assets/images/team-photos/bengeorgenetto.png",
      role: "Visual Designer",
      team: "Design Team",
      socials: {
        twitter: "ritin_george",
        linkedin: "ritin-george",
        instagram: "ritin_george",
        website: "ritin-george.me",
      },
    },

    {
      name: "Ben George Netto",
      imageURL: "/assets/images/team-photos/bengeorgenetto.png",
      role: "Visual Designer",
      team: "Design Team",
      socials: {
        twitter: "ritin_george",
        linkedin: "ritin-george",
        instagram: "ritin_george",
        website: "ritin-george.me",
      },
    },
  ]

}
}