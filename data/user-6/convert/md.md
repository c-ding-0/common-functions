---
bibliography:
- 'bib.bib'
---
## Section ##

- inline formula: $x^2=-1$.
- displayed formula: $$a^2+b^2=c^2.$$# This is a section

This is an inline equation: $x^2=-1$.

This is a centered equation: $$a^2+b^2=c^2.$$

This is a numbered equation: $$\begin{equation}
\lim_{n\to\infty}\frac{1}{n}=0.
\label{eq:sample}
\end{equation}$$

This is an aligned equation: $$\begin{align}
    \int_{0}^{1}2x\,dx 
    &=x^2\Big|_{x=0}^1\label{eq:sample2}\\
    &=1
\end{align}$$

This is how to cite the above equation:
$ImATemporaryStringToBeReplaced$ &
$ImATemporaryStringToBeReplaced$.

::: {#thm:sample .theorem}
**Theorem 1**. *This is a theorem environment.*
:::

::: {#corollary .corollary}
**Corollary 2**. *This is a theorem-like environments.*
:::

This is how to cite the above theorem:
[Theorem 1](#thm:sample) &
[Corollary 2](#corollary).

::: pro