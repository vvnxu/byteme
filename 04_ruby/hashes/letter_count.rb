# given a word

# I want to count the occurence of each letter

# 'apple'

# eg ['a','p','p','l','e']

['a','p'].each_with_index do |elem, index|

end

h = {}
h['a'] = 1
h['p'] = 1
h['l'] = 1
h['e'] = 1

# { 'a' => 1 }

# {
#   'a' => 1,
#   'p' => 2,
#   'l' => 1,
#   'e' => 1
# }

def letter_count(word) # 'apple'
  # step 1
  arr_of_letters = word.chars # ['a','p','p','l','e']

  # step 2
  table = {}

  arr_of_letters.each do |letter| # 'p'

    if table[letter] # key exist
      table[letter] = table[letter] + 1 
    else # doesn't exist
      table[letter] = 1
    end

  end

  return table
end

letter_count('apple')

