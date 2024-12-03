<!--
This file contains the README documentation for the Kafka-Services project.
-->
# Kafka-Services

## Introduction
Kafka-Services is a Node.js application that demonstrates the use of Apache Kafka for producing and consuming messages. This project includes an admin script to create Kafka topics, a producer script to send messages, and a consumer script to read messages from Kafka topics.

## Prerequisites
- Node.js (v12 or higher)
- Apache Kafka
- npm (Node Package Manager)

## Installation
1. Clone the repository:
    ```sh
    git clone <repository-url>
    cd kafka-app
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```

## Configuration
Ensure that your Kafka broker is running and accessible. Update the `brokers` array in `client.js` with the correct broker addresses if necessary.

## Usage

### Admin
The admin script is used to create Kafka topics.

1. Run the admin script:
    ```sh
    node admin.js
    ```

### Producer
The producer script sends messages to the Kafka topic.

1. Run the producer script:
    ```sh
    node producer.js
    ```

2. Enter messages in the format `<riderName> <location>` (e.g., `John North`). The producer will send these messages to the `Rider-updates` topic.

### Consumer
The consumer script reads messages from the Kafka topic.

1. Run the consumer script with a group ID:
    ```sh
    node consumer.js <group-id>
    ```

    Replace `<group-id>` with a unique identifier for the consumer group (e.g., `group1`).

## Project Structure

- [admin.js](http://_vscodecontentref_/1): Script to create Kafka topics.
- [client.js](http://_vscodecontentref_/2): Kafka client configuration.
- [consumer.js](http://_vscodecontentref_/3): Script to consume messages from Kafka topics.
- [producer.js](http://_vscodecontentref_/4): Script to produce messages to Kafka topics.
- [package.json](http://_vscodecontentref_/5): Project metadata and dependencies.
- [README.md](http://_vscodecontentref_/6): Project documentation.

## License
This project is licensed under the MIT License.