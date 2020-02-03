---
courseTitle: "Complex analysis"
courseId: "NMMA338"
year: "2019-winter"
---

# NMMA338 - Komplexní analýza

### Vlastnosti komplexních čísel

$$
\begin{aligned}
    |z|^2&=z\overline{z}\\
    |z|&=z\frac{\overline{z}}{|z|}\in\reals
\end{aligned}
$$

## Věty

### Definice - Množina komplexních čísel
Množinou komplexních čísel rozumíme množinu $\reals^2$

### Věta 1 - Odhad integrálu
Nechť $a,b\in\reals,a<b$ a funkce $f:[a,b]\to\Complex$ spojitá. Poté platí následující:

$$
\left|\int_{a}^{b} f(x) dx\right|
\leq \int_{a}^{b} \left|f(x)\right| dx
\leq (b-a)\max_{x \in [a,b]}\left\{ f(x) \right\}
$$

**Důkaz**
Pokud se integrál na pravé straně rovná 0, pak $f(x)\equiv0$ a vše je zřejmé.

Jinak zvolíme $z=\int_{a}^{b} f(x) dx$ a zřejmě $z \neq 0$, pak dle vlastností komplexních čísel platí:

$$
\begin{aligned}
\left|\int_{a}^{b} f(x) dx\right|

&= \overbrace{\frac{\overline{z}}{|z|} \int_{a}^{b} f(x)}^{\in\reals} dx
= \int_{a}^{b} \overbrace{\frac{\overline{z}}{|z|} f(x)}^{\in\reals} dx\\

&= Re\left( \int_{a}^{b} \frac{\overline{z}}{|z|} f(x) dx \right)
= \int_{a}^{b} Re\left( \frac{\overline{z}}{|z|} f(x) \right) dx\\

&\leq \int_{a}^{b} \overbrace{\left|\frac{\overline{z}}{|z|}\right|}^{1}\left|f(x)\right| dx
= \int_{a}^{b} \left|f(x)\right| dx
\end{aligned}
$$

Druhá nerovnost plyne jednoduše z reálné analýzy.

### Definice - Komplexní funkce komplexní proměnné
Funkce komplexní proměnné je zobrazení $f:M \to \Complex$, kde $M\subset\Complex$

### Definice - Derivace funkce v bodě $a$
Nechť $f$ je komplexní funkce komplexní proměnné a bod $a\in\Complex$.
Pak *derivací funkce $f$ v bodě $a$* rozumíme
$f'(a)=\lim\limits_{z \to a} \frac{f(z)-f(a)}{z-a}$, pokud existuje v $\Complex$.

### Definice - Holomorfní zobrazení
Něchť $\Omega \subset \Complex$ je otevřená.
Řekneme že funkce $f$ je *holomorfní* na $\Omega$, pokud má v každém bodě $\Omega$ derivaci.

Nechť $M \subset \Complex$. Řekneme že funkce $f$ je *holomorfní* na $M$,
pokud existuje $\Omega$ otevřená, taková že $M \subset \Omega \subset \Complex$
a funkce $f$ je *holomorfní* na $\Omega$.

### Věta 2 - Cauchy - Riemannovy podmínky
Nechť $z \in \Complex, z=a+bi, a,b \in \reals$. Pak funkce $f$ má v bodě z derivaci podle komplexní proměnné právě tehdy,
když $f=(Re(f), Im(f))=(f_1,f_2)$ má v bodě $[a,b]$ totální diferenciál a platí:

$$
\frac{\partial f_1}{\partial x}=\frac{\partial f_2}{\partial y}
\land
\frac{\partial f_1}{\partial y}=\frac{\partial f_2}{\partial x}
$$

**Důkaz**
Z definice derivace $f'(z)=A$ platí právě tehdy když $\lim\limits_{h \to 0} \frac{f(z+h)-f(z)}{h}=A$,
což můžeme zderivovat pro "reálnou část" (dle $x$):

$$
\begin{aligned}
\lim\limits_{h \to 0} \frac{f_1(z+h) + if_2(z+h)-f_1(z)-if_2(z)}{h}&=c+di\\
\lim\limits_{h \to 0} \frac{f_1(z+h) - f_1(z)}{h}
+ i\lim\limits_{h \to 0} \frac{f_2(z+h) - f_2(z)}{h}
&=c+di\\
\end{aligned}\\

\frac{\partial f_1}{\partial x}=c
\land
\frac{\partial f_2}{\partial x}=d
$$

A pro "komplexní část" (dle $y$):

$$
\begin{aligned}
\lim\limits_{h \to 0} \frac{f_1(z+ih) + if_2(z+ih)-f_1(z)-if_2(z)}{ih}&=c+di\\
\lim\limits_{h \to 0} \frac{f_1(z+ih) - f_1(z)}{ih}
+ i\lim\limits_{h \to 0} \frac{f_2(z+ih) - f_2(z)}{ih}
&=c+di\\
-i\lim\limits_{h \to 0} \frac{f_1(z+ih) - f_1(z)}{h}
+ \lim\limits_{h \to 0} \frac{f_2(z+ih) - f_2(z)}{h}
&=c+di\\
\end{aligned}\\
\frac{\partial f_1}{\partial y}=-d
\land
\frac{\partial f_2}{\partial y}=c
$$

Dáme parciální derivace do rovnosti (neboť se musí tyto limity rovnat aby derivace existovala):

$$
\begin{aligned}
\frac{\partial f_1}{\partial x}&=\frac{\partial f_2}{\partial y}\\
\frac{\partial f_1}{\partial y}&=-\frac{\partial f_2}{\partial x}
\end{aligned}
$$

### Věta BD
Pokud $\exists f'(z)$, pak je jakobián $\hat{￿f}$ v $[a,b]$ roven $|f'(z)|^2$

### Definice - mocniná řada
Nechť $a \in \Complex, \{c_n\}^{\infty}_{n=0}$ je posloupnost komplexních čísel.
Nekonečnou řadu funkcí $\sum^{\infty}_{n=0}c_n(z-a)^n$ nazýváme *mocninou řadou o středu a*.

*Poloměrem konvergence* této řady rouzumíme 
$R=\sup\{r \in [0, \infty];\sum^{\infty}_{n=0}|c_n|r^n \; \text{konverguje}\}$

### Definice - kruh konvergence mocniné řady
Množinu $U(a,R)=\{z \in \Complex; |a-z|<R\}$ nazýváme *kruh konvergence mocniné řady*.

### Věta 3
Řada $\sum^{\infty}_{n=0}c_n(z-a)^n$ konverguje lokálně stejnoměrně na svém kruhu konvergence.

**Důkaz**
Označme $f_N=\sum^N_{n=0}c_n(z-a)^n$, pak pro všechny $M \geq N$ platí:

$$
\begin{alignedat}
|f_M-f_N| &= \left| \sum^M_{n=N+1}c_n(z-a)^n \right|\\
&\leq \sum^M_{n=N+1}|c_n||z-a|^n && a\\
&\leq \sum^M_{n=N+1}|c_n|r_0^n && 0 < r_0 < R; |z-a| < r_0
\end{alignedat}
$$

A tato řada konverguje, neboť je uvnitř kruhu konvergence.
Tedy $f_N$ je stejnoměrně cauchyovská na $U(a,r_0)$, tedy tam i stejnoměrně konverguje.

### Věta BD
Položme $L=\limsup \sqrt[n]{|c_n|}$, pokud $L \in (0, \infty)$, pak $R=\frac{1}{L}$, pokud $L = 0$, pak $R=\infty$

### Věta 4
Nechť 
