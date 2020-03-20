require "haml"

a = Dir["*"].filter {|x| x.match?(/html\.haml/)}

a.each do |x|
	
	command = "haml #{x} #{x.gsub(/\.haml/, '')}"
	p "command: #{command}"
	`#{command}`
end

# get list of filenames w/ extension html.haml
# convert them to html

=begin
	
-- Aside --

-- Thu 19 Mar --

- 7:41 AM -

* Nerd.
* Wow, the Strokes. I hope you listen to this and think of me. I got here first. Tagging it for us. One more bad decision.
	
- 7:53 AM -

* Done





=end

