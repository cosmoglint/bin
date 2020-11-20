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
