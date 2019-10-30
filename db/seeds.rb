10.times do |blog|
  Blog.create!(
    title:"My Blog Post #{blog}",
    body:"A text file is a computer file that only contains text and has no special formatting such as bold text, italic text, images, etc. With Microsoft Windows computers text files are identified with the .txt file extension, as shown in the example picture."
  )
end

puts "10 blog posts created"

5.times do |skill|
  Skill.create!(
    title:"Rails #{skill}",
    percent_utilized:15
  )
end

puts "5 skills created"

9.times do |portfolio_item|
  Portfolio.create!(
    title:"Portfolio title: #{portfolio_item}",
    subtitle:"My great service",
    body:"A text file is a computer file that only contains text and has no special formatting such as bold text, italic text, images, etc. With Microsoft Windows computers text files are identified with the .txt file extension, as shown in the example picture.",
    main_image:"http://via.placeholder.com/700x300",
    thumb_image:"http://via.placeholder.com/400x250"
  )
end

puts "9 Portfolio items created"
