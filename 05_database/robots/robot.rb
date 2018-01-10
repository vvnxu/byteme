class Robot
  def initialize 
    @name = "#{prefix}#{suffix}"
  end

  def prefix
    ('aa'..'zz').to_a.sample
  end

  def suffix
    ('000'..'999').to_a.sample
  end

  def name
    return @name
  end

  def reset
    @name = "#{prefix}#{suffix}"
  end

  def instruction_count
  end

end

class Array
end