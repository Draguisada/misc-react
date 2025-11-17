string = '''
1 D B
2 D D
3 A A
4 D D
5 E C
6 E
7 D
8 C
9 C
10 E
11 B
12 E
13 B
14 C
15 E
16 C
17 A
18 E
19 B
20 C
21 A
22 E
23 C
24 C
25 E
26 D
27 B
28 A
29 B
30 A
31 B
32 D
33 E
34 B
35 B
36 C
37 B
38 A
39 A
40 B
41 D
42 D
43 C
44 C
45 A
46 C
47 E
48 E
49 D
50 C
51 A
52 D
53 B
54 D
55 E
56 C
57 A
58 D
59 E
60 D
61 E
62 C
63 A
64 B
65 A
66 C
67 B
68 A
69 D
70 A
71 B
72 B
73 C
74 B
75 C
76 E
77 A
78 E
79 E
80 D
81 D
82 B
83 C
84 D
85 D
86 E
87 C
88 B
89 B
90 A
'''

string = string.split('\n')[1:]
result = '['
for i in range(0, len(string)-1, 1):
    result += f'"{string[i].replace(' ',':', 1).replace(' ', '|')}", '
result += ']'
print(result)