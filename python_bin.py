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


# alice can produce a particular number of notebooks per day. given a range of days that each customer will wait, find out how many notebooks she needs to make per day to satisfy each customer
# eg
# 2 2 1 - customer a
# 2 3 3 - customer b
# 2 3 1 - customer c
# a needs one notebook by day 2, b needs three notebooks at either day 2 or day 3, c needs one notebook at either day 2 or day 3. so she needs to make two notebooks per day, starting from day 1
# day one she has two notes, day two she has four notes. so she sends off customer a. now in day three she makes two notes for a total of 5 notes and she gives b three and c 1


# n = int(input())
#
# for i in range(n):
#     mydic = {}
#     customers = int(input())
#     mindate = 1
#     maxdate = 1
#     maxnote = 1
#     for i in range(customers):
#         start,end,val = list(map(int,input().split()))
#         mindate = mindate if (mindate < end) else end
#         maxdate = maxdate if (maxdate > end) else end
#         maxnote = maxnote if (maxnote > val) else val
#         if end in mydic.keys():
#             mydic[end] += val
#         else:
#             mydic[end] = val
#
#     custlist = list(mydic.keys()).sort()
#
#     for notecount in range(1,maxnote+1):
#         sat = True
#         curnote = mindate * notecount
#         for day in range(mindate,maxdate+1):
#             if (curnote < mydic[day]):
#                 sat = False
#                 break
#             else:
#                 curnote -= mydic[day]
#                 curnote += notecount
#         if (sat == False):
#             continue
#         else:
#             ans = notecount
#             break
#     print(notecount)


        # ans = notecount
        # sat = True
        # if (notecount*mindate < mydic[mindate]):
        #     continue
        # curnote = notecount*mindate - mydic[mindate]
        # for day in range(1,len(custlist)):
        #     curnote += ((custlist[day] - custlist[day-1])*notecount)
        #     if (curnote < mydic[custlist[day]]):
        #         sat = False
        #         break
        #     else:
        #         curnote -= mydic[custlist[day]]
        #         # curnote += notecount
        # if (sat == False):
        #     continue
        # else:
        #     ans = notecount
        #     break


# def mutate(current,current_variation_list):
#     global alphabets_up
#     new = ""
#     for i,val in enumerate(current_variation_list):
#         if not(val):
#             new += current[i]
#         else:
#             new += random.choice(alphabets_up)
#     return new
