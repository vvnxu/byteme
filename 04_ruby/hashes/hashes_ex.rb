users = {
  "Jonathan" => {
    :twitter => "tronathan",
    :favorite_numbers => [12, 42, 75],
  },
  "Erik" => {
    :twitter => "sferik",
    :favorite_numbers => [8, 12, 24],
  },
  "Anil" => {
    :twitter => "bridgpal",
    :favorite_numbers => [12, 14, 85],
  },
}

users["Jonathan"][:favorite_numbers] & users["Erik"][:favorite_numbers] & users["Anil"][:favorite_numbers]



users["Jonathan"][:favorite_numbers].concat(users["Erik"][:favorite_numbers]).concat(users["Anil"][:favorite_numbers]).sort.uniq


odd_numbers = users["Anil"][:favorite_numbers].select do |number|
  number.even?
end

stuff.select { |number| number.even? }

line = {
  sandy: [1,2,3],
  aly: [3,4,5]
}

line.each do |line_name, stations|
  puts stations[0] 
end

