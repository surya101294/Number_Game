import React, { useEffect, useState } from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom";
import '../App.css';
import { Box, Button, Heading, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, VStack, useDisclosure } from '@chakra-ui/react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { patchData } from '../Redux/Auth/action';
import Navbar from '../Components/Navbar';

const Play = () => {

  let store = useSelector((store) => store.reducer)
  const { name, id, level, score } = store
  // console.log('store:Play', store)
  const { isOpen, onOpen, onClose } = useDisclosure()
  let dispatch = useDispatch()
  const navigate = useNavigate()
  const [arr, setArr] = useState([])
  const [sorted, setSorted] = useState([])
  const [delay, setDelay] = useState(20)
  const [playAgain, setPlayAgain] = useState(false)
  const [lost, setLost] = useState(false)

  const playagain = () => {
    // console.log(playAgain);
    onClose()
    setPlayAgain(true)
  }
  function generateRandomNumbers(difficultyLevel) {
    let count;
    switch (difficultyLevel) {
      case "Easy":
        count = 5;
        break;
      case "Medium":
        count = 7;
        break;
      case "Hard":
        count = 10;
        break;
      default:
        count = 5; // default to easy
    }
    const randomNumbers = [];
    for (let i = 0; i < count; i++) {
      const randomNumber = Math.floor(Math.random() * 100) + 1;
      randomNumbers.push(randomNumber);
    }
    setArr(randomNumbers)
    let sarr = [...randomNumbers]
    setSorted(sarr.sort((a, b) => a - b))
    return randomNumbers;
  }
  useEffect(() => {
    console.log("Effect", playAgain);
    generateRandomNumbers(level)
    if (level == "Easy") {
      setDelay(30)
    } else if (level == "Medium") {
      setDelay(50)
    } else if (level == "Hard") {
      setDelay(30)
    }
  }, [level, playAgain])


  function checkSort() {
    let flag = true
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] != sorted[i]) {
        flag = false
        return
      }
    }
    return flag
  }
  let isSorted

  useEffect(() => {
    isSorted = checkSort()
  }, [arr])

  const renderTime = ({ elapsedTime, remainingTime }) => {

    if (delay && elapsedTime == delay) {
      onOpen()
      // alert("Game Over")
    } else {
      if (isSorted) {
        // alert("won")
        setLost(true)
        if (level && level == "Easy") {
          dispatch(patchData({ ...store, score: score + 5 }))
          setDelay(0)
          setPlayAgain(false)
        } else if (level && level == "Medium") {
          dispatch(patchData({ ...store, score: score + 7 }))
          setDelay(0)
          setPlayAgain(false)
        } else if (level && level == "Hard") {
          dispatch(patchData({ ...store, score: score + 10 }))
          setDelay(0)
          setPlayAgain(false)
        }
        console.log(store);
        onOpen()
      }
    }

    return (
      <div className="timer">
        <div className="text">Remaining</div>
        <div className="value">{remainingTime}</div>
        <div className="text">seconds</div>
      </div>
    );
  };

  function handleDrag(result) {
    let newArray = [...arr]
    let dragIndex = result.source.index
    let myItem = newArray.splice(dragIndex, 1)
    newArray.splice(result.destination.index, 0, ...myItem)
    setArr(newArray)
  }

  return (
    <div className='gamebg'>
      <Navbar />
      <div className="wrapper">
        <CountdownCircleTimer
          isPlaying
          size="120"
          strokeWidth="8"
          duration={delay}
          colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
          colorsTime={[10, 6, 3, 0]}
          onComplete={() => ({ shouldRepeat: false, delay: 1 })}
        >
          {renderTime}
        </CountdownCircleTimer>

        <DragDropContext onDragEnd={handleDrag} >
          <Droppable
            direction="horizontal"
            droppableId="character"
          >
            {provided =>
              <Box className='dragZone'
                ref={provided.innerRef}
                {...provided.droppableProps}>
                {arr.map((item, i) => (
                  <Draggable key={String(item)} draggableId={String(item)} index={i}>
                    {(provided, snapshot) => (
                      <Text className='numberBox'
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                      >
                        {item}
                      </Text>
                    )}
                  </Draggable>
                ))}
              </Box>
            }
          </Droppable>
        </DragDropContext>
      </div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent color={"white"} w="250px" h={"300px"} bg={!lost ? "red" : "green"}>
          <ModalHeader >{!lost ? "Times up" : "Congratulations"}</ModalHeader>
          <ModalCloseButton />
          <ModalBody >
            <VStack>
              <Heading size={"2xl"}>{!lost ? "😔" : "🥳"}</Heading>
              <Heading size={"lg"}>{!lost ? "Oh no !" : "You Won"}</Heading>
            </VStack>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={() => {
              onClose()
              navigate("/")
            }}>
              Quit
            </Button>
            <Button variant='ghost' onClick={() => playagain()}>Play Again</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default Play