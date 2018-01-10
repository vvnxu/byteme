require 'pry'

fish = {
  name: 'nemo',
  health: 10
}

def move
end

class Fish # always starts with Capital and camel case

  def initialize(new_name)
    @name = new_name #instance variable
    @health = 10
  end

  def sleep # instance method
    @health = @health + 10
  end

  def name
    return @name
  end

  def set_name(new_name)
    @name = new_name
  end

  def to_s
    return "hello my name is #{@name}"
  end

end

class Shark

  def initialize
    @health = 1000
  end

end

binding.pry

puts 'paused'