# K-Pop Agenda Dynamics

This repository contains the data collection, preprocessing, topic modeling, and community analysis pipeline for the "K-Pop Agenda Dynamics" research project. The project investigates how different types of K-Pop news diffuse across anonymous online communities.

## Scripts

The analysis is broken down into a sequence of Jupyter Notebooks (`00` through `08`). Below is the documentation for each script detailing its inputs, functionality, and outputs.

### [00_ranking_crawler.ipynb](./Step1/Step1-1/00_ranking_crawler.ipynb)
*   **Inputs:** Start and end dates for crawling daily ranking URLs.
*   **What it does:** Crawls daily ranking pages of K-pop entertainment news to gather basic metadata and links for the top articles of each day.
*   **Outputs:** `articles_metadata.csv` (contains article URLs, titles, and dates).

### [01_content_crawler.ipynb](./Step1/Step1-1/01_content_crawler.ipynb)
*   **Inputs:** `articles_metadata.csv`.
*   **What it does:** Iterates through the gathered article URLs and fetches the full text content for each article.
*   **Outputs:** Text (`.txt`) files containing the full content of the articles.

### [02_missing_file_check.ipynb](./Step1/Step1-2/02_missing_file_check.ipynb)
*   **Inputs:** Downloaded `.txt` files and metadata.
*   **What it does:** Verifies the completeness of the downloaded article content to identify any gaps (e.g., deleted articles or failed downloads). Missing data was found to be negligible.
*   **Outputs:** Summary of missing files and updated valid article lists.

### [03_same_content_check.ipynb](./Step1/Step1-2/03_same_content_check.ipynb)
*   **Inputs:** Article content files.
*   **What it does:** Uses `SentenceTransformer` and cosine similarity to identify and deduplicate news articles that share the same or highly similar content.
*   **Outputs:** Deduplicated list of unique articles.

### [04_top_300_sorting.ipynb](./Step1/Step1-2/04_top_300_sorting.ipynb)
*   **Inputs:** Deduplicated list of articles.
*   **What it does:** Sorts the deduplicated articles by view count or engagement and filters the dataset down to the top 300 most impactful articles.
*   **Outputs:** `top300_filtered.csv`.

### [05_topic_modeling.ipynb](./Step1/Step1-3/05_topic_modeling.ipynb)
*   **Inputs:** `top300_filtered.csv`.
*   **What it does:** Performs Hybrid Zero-Shot Topic Modeling using BERTopic and `jhgan/ko-sbert-sts`. It maps the 300 articles to predefined labels (`["스타", "결혼 연애", "사망", "논란"]`). *Note: Only a subset of these articles is ultimately selected for community reaction analysis to avoid spam and handle platform search constraints.*
*   **Outputs:** `top300_filtered_with_topics_ZeroShot.csv` and `top5_articles_per_topic_ZeroShot.csv`.

### [06_DCinside_list_crawler.ipynb](./Step2/Step2-1/06_DCinside_list_crawler.ipynb)
*   **Inputs:** Keywords (stars/subjects) and specific date windows relative to the article publication dates.
*   **What it does:** Crawls DCInside community posts searching for the target keywords within the pre-defined window around the article publication, handling DCInside's 120-page search limit.
*   **Outputs:** `[Keyword]_list.csv` files containing community post dates, titles, URLs, and preview content.

### [07_analysis.ipynb](./Step2/Step2-2/07_analysis.ipynb)
*   **Inputs:** `name_article_time.csv` and `[Keyword]_list.csv` files. Note that the `name_article_time.csv` was simply manually made, by looking at the `top300_filtered.csv` file.
*   **What it does:** Analyzes the diffusion (attention ratio) and sentiment shifts of keywords on DCInside before (-14 days baseline) and after the news articles. Performs sentiment scoring using `nlptown/bert-base-multilingual-uncased-sentiment`. Excludes Topic 3 from the analysis.
*   **Outputs:** Dataframes and CSVs with event-level attention ratios and sentiment analysis results.

### [08_plots.ipynb](./Step2/Step2-2/08_plots.ipynb)
This is a seperate file from the main workflow, mainly used for the intial data analysis assignment.

## Webpage

The webpage for this project can be found ![here](https://qss45-jihyung-final.vercel.app/)