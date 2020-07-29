price = 2000000
proc = 1.02
years = 30
sum = 0
monthly = 10000
ostatok = price
for i in range(30):
    if(ostatok < 0):
        break
    sum = sum + ostatok * proc
    ostatok = ostatok - 12 * monthly
    print("ostatok: " + str(ostatok))


print(sum)