require "haml"

a = Dir["*"].filter {|x| x.match?(/html\.haml/)}

a.each do |x|
	
	command = "haml #{x} #{x.gsub(/\.haml/, '')}"
	p "command: #{command}"
	`#{command}`
end

# get list of filenames w/ extension html.haml
# convert them to html
