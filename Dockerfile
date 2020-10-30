FROM node:lts-alpine as Build

COPY frontend/ /app/frontend
WORKDIR /app/frontend

RUN npm install -g npm@7.0.6

RUN npm install
RUN npm run build


FROM python:3.6

COPY . /app
WORKDIR /app
COPY --from=Build /app/frontend/build/  /app/frontend/build

RUN pip install -r requirements.txt

ENTRYPOINT ["python"]

EXPOSE 8000

CMD ["app.py"]
