# from django.http import HttpResponse
# from django.template import loader

# Create your views here.

# normal httpresponse
# def index(request):
#     return HttpResponse("hi this is a view")

#using template loader
# def index(request):
#     templateee = loader.get_template('homepage/index.html')
#     context = {}
#     return HttpResponse(templateee.render(context,request))

# main_loop()

# tt = [
#     "X",0,"X",
#     "O","X","O",
#     "X","O","O"
# ]
# print(end(tt))



# useless tic tac toe logic

# global game_list
# global grid_size
# horiz_test = []
# vert_test = []
# for i in range(grid_size):
#     for j in range(grid_size):
#         vert_test.append(game_list[i+(grid_size*j)])
#         horiz_test.append(game_list[(i*grid_size)+j])
#     if (set(horiz_test) == set("X")) or (set(vert_test) == set("X")):
#         return "x wins"
#     elif (set(horiz_test) == set("O")) or (set(vert_test) == set("O")):
#         return "o wins"
#     else:
#         vert_test = []
#         horiz_test = []
#         continue
# diag_test = []
# diag_test1 = []
# for i in range(3):
#     diag_test.append(game_list[i+(i*grid_size)])
#     diag_test1.append(game_list[(i*grid_size)+(grid_size-i-1)])
# if (set(diag_test) == set("X")) or (set(diag_test1) == set("X")):
#     return "x wins"
# elif (set(diag_test) == set("O")) or (set(diag_test1) == set("O")):
#     return "o wins"
# elif 0 not in game_list:
#     return "draw"
# else:
#     return "continue"


# rat problem

# def black(years,rats):
#     two_prev = 0
#     prev = 0
#     current = rats
#     for i in range(years):
#         current = (current*3)
#         prev = current
#         two_prev = prev
#     return current + current/3


# def white(years,rats):
#     prev = 0
#     two_prev = 0
#     three_prev = 0
#     current = rats
#     for i in range(years-1):
#         current = (current*2) + (prev * 3) + (two_prev) - (three_prev)
#         three_prev = two_prev
#         two_prev = prev
#         prev = current
#     return current


# import functools
#
# def mult(x):
#     if x<2:
#         x = x * 5
#     return x
#
# lst = [1,2,3,4,5]
#
#
# val = list(map(mult,lst))
# # val = [i*5 for i in lst]
#
# print(val)


# import itertools
#
#
# lst = [1,1,1,2,3,4,4,4,4,5,6,7,7,7]
#
# newl = itertools.groupby()
