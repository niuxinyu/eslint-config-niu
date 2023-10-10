import { onMounted } from 'vue'

import axios from 'axios'
import express from 'express'

import useTimeout from 'src/useTimeout'

import getName from './getName'

globalThis.console.log(onMounted)
globalThis.console.log(useTimeout)
globalThis.console.log(express, getName, axios)
