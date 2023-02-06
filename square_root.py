#python code to focus on datastructure and other related algorithms that can really help me to improve my coding skills 
# code for calculating square root of a number

# this the first method that checks if the number is perfect square .
def is_perfect_square(number):
    count = 0
    while number > count:
        if number < count*count:
            return False
        elif number == count*count:
            return True
        else:
            count += 1
    else:
        return False



#RETURNS  SQUARE ROOT OF A NUMBER.
def square_root(number):
    try:
        number = int(number)
        if number < 0:
            return "Negative has no square root"
        count = 0
        while number > count:
            if number < count*count:
                count -= 1
                B = number - count*count
                return non_perfect_square(count,B)
            elif number == count*count:
                return count
            else:
                count += 1
    except:
       return "please enter a number"
       

'''
Non perfect square formula is 
 X = A+B

 sqrt(X) = sqrt(A) + B/2*sqrt(A)

'''
def non_perfect_square(a,b):
    dinom = a+a
    return a + (b/dinom)




#DONE 
number = input("Enter a number to Know its Square root :: ")
print("Square root of the number is:- ", square_root(number))