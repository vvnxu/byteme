

# ['ruby','js','css']

# "ruby, js and css"

def to_sentence(arr)
  case arr.length
  when 1
    arr[0]
  when 2
    arr.join(' and ')
  else
    "#{arr[0..-2].join(', ')} and #{arr[-1]}"
  end
end

# gem install minitest -v 5.11.1
# gem install minitest-reporters -v 1.1.18

# if to_sentence(['ruby','js','css']) == "ruby, js and css"
#   puts 'good job'
# end

