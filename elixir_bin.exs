
    # defmodule Solution do
    # #Enter your code here. Read input from STDIN. Print output to STDOUT
    #     def main(n,_lst) do
    #
    #         IO.puts(n + Enum.at([3],0))
    #     end
    # end
    #
    #
    # lines = IO.read(:stdio, :all)
    #
    #
    # n = IO.read(:stdio, :line)
    # lst = IO.read(:stdio, :line)
    #
    # n
    #     |> String.replace("\r","")
    #     |> String.replace("\n","")
    #     |> String.to_integer
    #     |> IO.inspect
    #
    #
    # lst
    #     |> String.split(" ")
    #     |> Enum.map(&(String.to_integer(&1)))
    #     |> IO.inspect
    #
    # IO.inspect(n)
    # Solution.main(n,lst)



    # def reverse([ val ], ans), do: [ val | ans ]
    #     def reverse([ head | tail ], ans) do
    #         [ ans | reverse(tail) ]
    #     end


# defmodule Solution do
# #Enter your code here. Read input from STDIN. Print output to STDOUT
#     def main(vals) do
#
#     end
# end
#
# vals = String.split(IO.read(:stdio, :all))
#
# IO.inspect(vals)








#  OK SO MIND BLOWN RIGHT HERE. THIS FUNCTION GETS A LIST AND REVERSES IT BY REDUCING IT. HOW IT DOES IS IT TAKES AN EMPTY LIST AS ACCUMULATOR AND THEN WHEN EACH NEW ELEMENT IS REDUCED WITHT THE FUNCTION IT ADDS IT TO THE TAIL OF THE LIST AND HENCE ALL ELEMENTS ARE REVERSED. THATS AWESOME 


#     IO.stream(:stdio, :line)
# |> Enum.map(&String.trim/1)
# |> Enum.reduce([], &([&1 | &2]))
# |> Enum.each(&IO.puts/1)
