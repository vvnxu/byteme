
def shouting?(text) # method
  if text.upcase == text
    return true
  else 
    return false
  end
end

def question?(text)
  if text.strip.end_with?('?')
    return true
  else
    return false
  end
end

print 'say something: '
remark = gets().chomp()

if question?(remark) 
  puts('sure')
elsif remark.empty?
  puts 'fine be that way'
elsif shouting?(remark)
  puts 'chill out'
else
  puts 'watever'
end

