# K-Pop Agenda Dynamics: A Comparative Analysis of Topic Diffusion and Sentiment on News and Social Media

Ongoing research notes on the K-Pop Agenda Dynamics research by Jihyung Kim & Kassenov Mansur.

# Important Note

This README.md will be edited greatly on the first few weeks of 2026, as a lot of data processing can be done after 2025 ends.

**One line summary**: Sort K-pop related articles into distinct agenda topics, then check the characteristics of community response for each distinct agenda topics. We may also compare how the community response differ from one online community / SNS platform to another.

**Target of Analysis**: Top K-pop related articles on [Naver Entertainment](https://m.entertain.naver.com/series?tab=subject&categoryId=ALL), from 20250101 to 20251231

**Data Source**:

1. News data via links provided through Naver News. 
2. DC inside - OK, Nate Pann (네이트 판) - Not sure, Theqoo (더쿠) - Login Required to search, FMKorea - OK, MLBPARK - OK

## Step 1 - Cluster News Articles to Distinct Agenda Topics

### 1.1 - News Data Collection

From Jan 1st, 2025 to Dec 31rd, 2025, the 10 articles with the highest number of daily views will be collected. Some articles could not be found, likely because the original articles were deleted. However, it was a extremely small portion of the total number of collected articles and therefore we moved on.
Then, I obtained the article texts for the 3658 articles.
[Source code for Content Crawler](https://github.com/LoveLow-Global/kpop-agenda-sentiment/blob/main/Step1/Step1-1/content_crawler.ipynb)
Article texts are not on this repository, but you can run the codes provided and get them yourself.

### 1.2 - Check news articles with same content

Sort out the news articles with the same content. It is very likely that different media companies posted articles with the core information. Example: [Article 1](https://m.entertain.naver.com/ranking/article/382/0001097705) and [Article 2](https://m.entertain.naver.com/ranking/article/312/0000643408) is about the same event. A single company could have also re-posted with a little tweak over time as well. We will sort out the articles with the same core information. This is to focus on the upload time of the 1st news article, as the information diffusion among the public starts then.

### 1.3 - Topic Modeling

Apply topic modeling on the gathered news articles, used KoBERT.

The research paper below uses LDA(u_mass).

[K-POP 아이돌 그룹의 세대별 이슈 변화 분석 고찰 - 뉴스 빅데이터를 중심으로](https://www-dbpia-co-kr-ssl.access.yonsei.ac.kr/journal/articleDetail?nodeId=NODE11889791),[Topic Granularity & Hallucination LLM Topic Modelling](https://arxiv-org.access.yonsei.ac.kr/abs/2405.00611), 
[multi-granularity learning towards open topic classification](https://www-sciencedirect-com-ssl.access.yonsei.ac.kr/science/article/pii/S0020025521011555), [Granularity of algorithmically constructed publication-level classifications of research publications: Identification of topics](https://arxiv-org.access.yonsei.ac.kr/abs/1801.02466)

## Step 2 - Analysis on the Diffusion of each Article and Sentiment

### 2.1 - Select some news over different topics.

Select the top **5-10** most influential news per topic type. (numbers subject to change)

### 2.2 - Analysis

Analyze the user reactions on various websites / SNS platforms. (number of likes, comments, views)

As most articles regarding K-pop have clear keywords (usually the person / group / company name), we can analyze the articles with these keywords included in the title or text.

#### 2.2.1 - Time period Analysis

Analyze the number of the keywords appearing before / after the news article being posted. Check how long it takes for the news to be at its highest attention. On top of that, we can also check the number of changes in the positive / negative word usage around the keywords. (Useful for platforms like DCinside)

$\to$ We can also do this by counting the number of related tags on a SNS platform before / after the news article posted (Useful for platforms like Instagram)

From this, we can draw insights on the distinct agenda topics and their differences when it comes to information diffusion and reactions. We can also **compare the different information diffusion and reactions across different platforms**.

#### 2.2.2 - Example

For example, after the news of 카리나 and 이재욱 dating was first told to the public by 디스패치(company code: 311), we can analyze the number of articles with '카리나' or '재욱' included in the article, and analyze how the numbers of these articles change over time. We can also check the number of changes in the positive / negative word usage in the articles containing '카리나' or '재욱'. This data can be part of the "romance" category. (category name subject to change)

## Step 3 - Comparison Between the Different Diffusion and Sentiment Across Different Topics and Platforms

