all:
	cd out && \
	git init && \
	git add -A && \
	git commit -m "deploy static export" && \
	git branch -M main && \
	git remote add origin git@github.com:dhuyy/dhuymartins.online.git && \
	git push -u --force origin main && \
	cd ..