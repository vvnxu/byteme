require 'pry'

hash = {
  'artist' => 'lionel richie'
}

hash2 = {
  5 => 'five'
}

# keys are of symbol type

# peer pressure from js syntax 
# keys are always symbols
song = {
  title: 'hello',
  artists: ['lionel richie', 'adele'],
  released: 1983
}

arr = {
  0 => 'one',
  1 => 'two'
}


# old syntax of a hash
# song = {
#   :title => 'hello',
#   :artist => 'lionel richie',
#   :released => 1983
# }


binding.pry

puts 'program paused'