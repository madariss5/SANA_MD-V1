FROM quay.io/gurusensei/gurubhay:latest

RUN git clone https://Github.com/sana3165829/SANA_MD-V1 /root/global

WORKDIR /root/global/

RUN npm install --platform=linuxmusl

EXPOSE 5000

CMD ["npm", "start"]
