require 'pry' # because may be you want to pause your program with binding.pry
require 'fileutils' # because we need a method from this library
# FileUtils.mkdir() # this is the method we want

hackers = ['Joe Black', 'Mary Jane Lisa', 'John Smith']

# /joe-black 
# /mary-jane-lisa
# /john-smith

hackers.each do |hacker|

  directory_name = hacker.downcase.gsub(' ','-')
  FileUtils.mkdir(directory_name)

end

# making folders

# binding.pry # pause your program right here

# puts('end of program') # this is necessary for binding.pry to work
