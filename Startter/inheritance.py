
class A(object):
    def method(self):
        print('A class method')  # 3
        super().method()

class B(object):
    def method(self):
        print('B class method')  # 5
        super().method()

class C(object):
    def method(self):
        print('C class method')  # 6

class X(A,B):
    def method(self):
        print('X class method')  # 2
        super().method()
class Y(B,C):
    def method(self):
        print('Y class method')  # 4
        super().method()
class P(X,Y,C):
    def method(self):
        print('P class method')  #1
        super().method()

p = P()
p.method()
