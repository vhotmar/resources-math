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
Nechť $a,b\in\reals,a<b$ a funkce $f:[a,b]\to\Complex$ spojitá.
Poté platí následující:

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
$f'(a)=\lim\limits_{z \to a} \frac{f(z)-f(a)}{z-a}$,
pokud existuje v $\Complex$.

### Definice - Holomorfní zobrazení
Něchť $\Omega \subset \Complex$ je otevřená.
Řekneme že funkce $f$ je *holomorfní* na $\Omega$, pokud má v každém bodě $\Omega$ derivaci.

Nechť $M \subset \Complex$. Řekneme že funkce $f$ je *holomorfní* na $M$,
pokud existuje $\Omega$ otevřená, taková že $M \subset \Omega \subset \Complex$
a funkce $f$ je *holomorfní* na $\Omega$.

### Věta 2 - Cauchy - Riemannovy podmínky
Nechť $z \in \Complex, z=a+bi, a,b \in \reals$.
Pak funkce $f$ má v bodě z derivaci podle komplexní proměnné právě tehdy,
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
Pokud $\exists f'(z)$, pak je Jakobián $\hat{f}$ v $[a,b]$ roven $|f'(z)|^2$

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
\begin{alignedat}{2}
|f_M-f_N| &= \left| \sum^M_{n=N+1}c_n(z-a)^n \right|\\
&\leq \sum^M_{n=N+1}|c_n||z-a|^n\\
&\leq \sum^M_{n=N+1}|c_n|r_0^n && 0 < r_0 < R; |z-a| < r_0
\end{alignedat}
$$

A tato řada konverguje, neboť je uvnitř kruhu konvergence.
Tedy $f_N$ je stejnoměrně cauchyovská na $U(a,r_0)$, tedy tam i stejnoměrně konverguje.

### Věta BD
Položme $L=\limsup \sqrt[n]{|c_n|}$, pokud $L \in (0, \infty)$, pak $R=\frac{1}{L}$, pokud $L = 0$, pak $R=\infty$

### Věta 4
Nechť 
$f(z)=\sum^{\infty}_{n=0}c_n(z-a)^n, h(z)=\sum^{\infty}_{n=1}nc_n(z-a)^n-1, g(z)=\sum^{\infty}_{n=0}\frac{c_n}{n+1}(z-a)^n+1$.
Pak
- $f$ je *holomorfní* na $U(a, R)$
- $h$ je definována na $U(a,R)$ a $f'(z)=h(z)$ na $U(a,R)$
- $g$ je definována na $U(a,R)$ a $g'(z)=f(z)$ na $U(a,R)$

**Důkaz**
Využijeme větu z matematické analýzy:
> *12.1.13 - stejnoměrná konvergence derivací* (Matematická analýza - Hencl)
>
> Nechť $(a,b)$ je omezený interval a nechť ${f_n}$ je posloupnost funkcí z $(a,b)$ do $\reals$. Nechť
> 1) $\forall n \in \natnums$ má $f_n$ vlastní derivaci na intervalu $(a,b$
> 2) $\exists x_0 \in (a,b)$ takové, že posloupnost reálných čísel ${f_n(x_0)}$ je konvergentní
> 3) posloupnost ${f_n'}$ je stejnoměrně konvergentní na $(a,b)$
> 
> Poté existuje funkce $f$ taková, že:
> - $f_n \rightrightarrows f$ na $(a,b)$
> - $f$ má vlastní derivaci na $(a,b)$
> - $f_n' \rightrightarrows f'$ na $(a,b)$

Definujme $f_N=\sum^{N}_{n=0}c_n(z-a)^n$ a $h_N=\sum^{N}_{n=1}nc_n(z-a)^{n-1}$.
Pracujeme na $U(a,r_0), 0<r_0<R$, kde zřejmě $f_N \rightrightarrows f$ a $h_N \rightrightarrows h$.
Rozdělíme na složky $f_N=(f_N^1,f_N^2)$ a $g_N=(g_N^1,g_N^2)$.

Zřejmě $f_N'=h_N$, neboť $f_N'=(\sum^N_{n=0}c_n(z-a)^n)'=\sum^N_{n=0}(c_n(z-a)^n)'=\sum^N_{n=1}nc_n(z-a)^{n-1}=h_N$

### Definice - exponenciální funkce
Pro $z \in \Complex$ definujeme $exp(z)=e^z=\sum^\infty_{n=0}\frac{z^n}{n!}$.
Nazýváme *exponenciální funkce*.

### Věta 5 - vlastnosti $e^z$
(1) $e^z$ je definováno na $\Complex$, je na $\Complex$ holomorfní a $(e^z)'=e^z, z \in \Complex$

**Důkaz**
Zřejmě $R=\infty$, tedy $e^z$ definováno na $\Complex$ a je tam i holomorfní.
$(e^z)'=\sum^\infty_{n=1} \frac{z^{n-1}}{(n-1)!}=\sum^\infty_{n=0} \frac{z^{n}}{n!}=e^z$

(2) Pro $z,w \in \Complex$ platí $e^{z+w}=e^ze^w$

**Důkaz**
$e^{z+w}
=\sum^\infty_{n=0} \frac{(z+w)^n}{n!}
=\sum^\infty_{n=0} \sum^n_{k=0} \binom{n}{k} \frac{z^{n-k}w^k}{n!}
=\sum^\infty_{n=0} \sum^n_{k=0} \frac{z^{n-k}w^k}{(n-k)!k!}
\overbrace{=}^{\text{Fub.}} \sum^\infty_{s=0} \sum^\infty_{k=0} \frac{z^s}{s!}\frac{w^k}{k!}
=e^ze^w$

(3) Pro $b \in \reals$ platí $e^{ib}=\cos{b}+i\sin{b}$

**Důkaz**
$e^{ib}
=\sum^\infty_{n=0} \frac{(ib)^n}{n!}
=\sum^\infty_{\underbrace{n=0}_\text{sudé}} \frac{(-1)^{n \over 2}}{n!}b^n
+\sum^\infty_{\underbrace{n=1}_\text{liché}} \frac{(-1)^{n-1 \over 2}}{n!}b^n$

(4) Pro $z=a+ib$ platí $e^z=e^a(\cos{b}+i\sin{b})$

**Důkaz**
$e^{a+ib}=e^ae^{ib}=e^a(\cos{b}+i\sin{b})$

(5) $z \in \Complex$ platí:
- $e^z \neq 0$
- $e^{\overline z}=\overline{e^z}$
- $|e^z|=e^{Re(z)}$

**Důkaz**
- z (4) $e^z=e^ae^{ib}$ a tedy určitě $e^a \neq 0$ a $\cos{b}+i\sin{b} \neq 0$.
- $e^{\overline z}=e^{a-ib}=e^a(\cos(-b)+i\sin(-b))=e^a(\cos{b}-i\sin{b})=\overline{e^z}$
- $|e^z|=|e^a||\cos{b}+i\sin{b}|=|e^a|=e^a=e^{Re(z)}$

### Definice - $sin, sinh, cos, cosh$
Pro $z \in \Complex$ definujeme:
$$
\begin{alignedat}{2}
\sin(z) &= \frac{e^{iz}-e^{-iz}}{2i} \qquad \cos(z) &= \frac{e^{iz}+e^{-iz}}{2}\\
\sinh(z) &= \frac{e^{z}-e^{-z}}{2} \qquad \cosh(z) &= \frac{e^{z}+e^{iz}}{2} 
\end{alignedat}
$$

### Věta BD - vlastnosti goniometrických a hyperbolických funkcí
- jsou definovány na $\Complex$ a jsou na $\Complex$ holomorfní
- $\sinh{iz}=i\sin{z}, \cosh{iz}=i\sin{z}, e^z=\cos{z}+i\sin{z}$
- $\sin'{z}=\cos{z},\cos'{z}=-\sin'{z},\sinh'{z}=\cosh{z},\cosh'{z}=\sinh{z}$
- $\sin^2{z}+\cos^2{ż}=1,\cosh^2{z}-\sinh^2{ż}=1$
