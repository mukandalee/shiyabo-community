# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
puts "🤠 Seeding ..."

User.create([
  {
    userName: "leonard mukanda",
    userEmail: "leonardmukanda7@gmail.com",
    phoneNumber: 792660940,
    role: "member"
  },
  {
    userName: "lee dae hoon",
    userEmail: "leonardmukanda254@gmail.com",
    phoneNumber: 792660930,
    role: "member"
  },
  {
    userName: "rashtov",
    userEmail: "rashtov@gmail.com",
    phoneNumber: 792660920,
    role: "member"
  },
  {
    userName: "sinden",
    userEmail: "sinden@gmail.com",
    phoneNumber: 792660910,
    role: "member"
  }
])
Admin.create([
  {
    adminName: "leonard mukanda",
    adminEmail: "leonardmukanda7@gmail.com",
    phoneNumber: "792660940",
    password: "admin123"
  },
  {
    adminName: "lee dae hoon ",
    adminEmail: "leedaehoon@gmail.com",
    phoneNumber: "792660930",
    password: "admin123"
  },
  {
    adminName: "rashtov",
    adminEmail: "rashtov@gmail.com",
    phoneNumber: "792660960" ,
    password: "admin123"
  }
])

Event.create([
  {
    eventName: "Bright's graduation",
    image: "https://media.istockphoto.com/id/480952865/photo/graduating-class.jpg?s=612x612&w=is&k=20&c=H9WY0jRPUNbNDh8mb-EKMXjbti_xER-doBHpx0x94Iw=",
    eventVenue: "KIBU",
    description: "This is Bright's graduation ceremony that will be held on dec at kibabii university",
    eventDate: "2/12/2023",
    category: "Graduation Ceremony"
  },
  {
    eventName: "Tom's fundraising",
    image: "https://media.istockphoto.com/id/676023296/photo/top-contributor.jpg?b=1&s=170667a&w=0&k=20&c=0qcrp_HySuwtPVlmtR8C2MvsN68yAksI8MXXXJ327tA=",
    eventVenue: "Bulimbo Market",
    description: "This is a fundraising ceremony to help Tom complete his studies",
    eventDate: "3/12/2023",
    category: "fundraising Ceremony"
  },
  {
    eventName: "Community AGM",
    image: "https://media.istockphoto.com/id/1397258192/photo/agm-annual-general-meeting-words-in-notebook-and-wooden-background.jpg?s=612x612&w=is&k=20&c=e8T4Gn_GSfqWuNAT2JyRg5RP-dNLpsS98pxqa3-v0gs=",
    eventVenue: "Shiyabo Market",
    description: "This is community annual general meeting that takes place every year ",
    eventDate: "25/6/2023",
    category: "AGM Meeting"
  },
  {
    eventName: "Mzee omwami send off",
    image: "https://media.istockphoto.com/id/1195555709/photo/group-of-burning-candles-against-blue-background-close-up.jpg?b=1&s=170667a&w=0&k=20&c=Ul0ZFsXxjwZdb60XtzbFXOoqrIfyMlro_HuDvIV7NUE=",
    eventVenue: "Mzee omwami home",
    description: "This is mzee omwani funeral ",
    eventDate: "25/5/2023",
    category: "funeral"
  }
])

Contribution.create([
  {
    eventName: "Bright's graduation",
    eventDate: "2/12/2023",
    contributionTarget: "20,0000"
  },
  {
    eventName: "Tom's fundraising",
    eventDate: "3/12/2023",
    contributionTarget: "50,000"
  },
  {
    eventName: "Community AGM",
    eventDate: "25/6/2023",
    contributionTarget: "10,000"
  },
  {
    eventName: "Mzee omwami send off",
    eventDate: "25/5/2023",
    contributionTarget: "15,00000"
  }
])
Category.create([
    { name: "AGM" },
    { name: "Funeral" },
    { name: "Fundraising" },
    { name: "other ceremonies" }
  ])

puts "✅ Done seeding!"
