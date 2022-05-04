# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

mateus = Author.create(name: "Mateus Mendonça", email: "mateus@email.com", qualification: "Fullstack Developer Intern")
firmino = Author.create(name: "Firmino André", email: "firmino@email.com", qualification: "Fullstack Developer Intern")
samuel = Author.create(name: "Samuel Filipe", email: "samuel@email.com", qualification: "Fullstack Developer Intern")
marcelo = Author.create(name: "Marcelo Edivan", email: "marcelo@email.com", qualification: "Fullstack Developer Intern")
kiyoshi = Author.create(name: "Kiyoshi Miyabe", email: "kiyoshi@email.com", qualification: "Fullstack Developer Intern")

computer_science_ead = Course.create(code: 10, name: "Bachelor degree in Computer Science EAD", education_level: "EAD", author: kiyoshi)
computer_science = Course.create(code: 10, name: "Bachelor degree in Computer Science", education_level: "On Site", author: mateus)
web_development = Course.create(code: 10, name: "Post Graduation in Web Development", education_level: "Postgraduete", author: marcelo)
iformation_systems = Course.create(code: 11, name: "Bachelor degree in Information Systems", education_level: "On Site", author: samuel)
software_engineer = Course.create(code: 12, name: "Bachelor degree in Software Engineer", education_level: "On Site", author: firmino)

