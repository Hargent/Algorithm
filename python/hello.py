print("Hello, World!")
# O(n)
def print_items(n):
    for i in range(n):
        print(i)

print_items(5)

class Cookie:
    def __init__(self, colors):
        self.colors = colors    
    def get_colors(self):
        return self.colors
    def set_colors(self, colors):
        self.colors = colors


my_cookie = Cookie(["red", "green", "blue"])
print(my_cookie.get_colors())
my_cookie.set_colors("grey")
print(my_cookie.get_colors())