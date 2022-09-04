import { differenceInMinutes, format } from 'date-fns';
import Image from 'next/image';
import styles from './ScheduleSection.module.css';

import * as React from 'react';
import type * as types from 'types';

const SCHEDULE_ROW_INCREMENT = 5; // minutes

const ScheduleSection: React.FC<types.ScheduleSection> = (section) => {
  const style = {
    '--grid-tracks': section.tracks.length,
  } as React.CSSProperties;

  return (
    <section className="py-8 px-6 md:py-20">
      <div className="xl:container mx-auto">
        <div className={styles.grid} style={style}>
          {renderSchedule(section)}
        </div>
      </div>
    </section>
  );
};

const renderSchedule = (schedule: types.ScheduleSection): React.ReactNode => {
  const startTimes = getSessionStartTimes(schedule);
  const firstStartTime = startTimes[0];

  const renderSessionsAtTime = (startTime: Date): React.ReactNode => {
    const startTimeString = getTimeString(startTime);
    const offsetFromFirstStartTime = getIntervalsFromFirstStartTime(firstStartTime, startTime) + 1;

    const sessions: React.ReactNode[] = [];
    for (let i = 0; i < schedule.tracks.length; i++) {
      const track = schedule.tracks[i];
      const session = track.sessions.find((session) => getTimeString(session.startTime) === startTimeString);
      if (session) {
        const columnStart = i + 2;
        const columnEnd = session.spanAllTracks ? -1 : 'span 1';
        const rowStart = offsetFromFirstStartTime;
        const rowEnd = rowStart + getIntervalsForDuration(session.startTime, session.endTime);
        const style = {
          gridColumn: `${columnStart} / ${columnEnd}`,
          gridRow: `${rowStart} / ${rowEnd}`,
        };
        const duration = getDurationInMinutes(session.startTime, session.endTime);
        sessions.push(
          <article
            key={`${startTimeString}-${i}`}
            className="flex flex-col p-6 my-5 xl:my-0 border rounded border-complementary"
            style={style}
          >
            <h2 className="text-lg md:text-xl">{session.title}</h2>
            <p className="text-sm text-copy-faded">
              <span className="inline-block">{duration} minutes</span>
              {track.details && (
                <>
                  <span className="mx-2">&middot;</span>
                  <span className="inline-block">{track.details}</span>
                </>
              )}
            </p>
            {renderSpeakers(session)}
          </article>
        );
      }
    }

    const style = {
      gridColumn: '1 / span 1',
      gridRow: `${offsetFromFirstStartTime} / span 1`,
    };
    return (
      <React.Fragment key={startTimeString}>
        <p className="mt-6 mb-5 xl:mb-0 text-lg md:text-xl" style={style}>
          {startTimeString}
        </p>
        {sessions}
      </React.Fragment>
    );
  };

  return <>{startTimes.map(renderSessionsAtTime)}</>;
};

const renderSpeakers = (session: types.Session): React.ReactNode => {
  if ((session.speakers?.length ?? 0) === 0) {
    return null;
  }
  return (
    <div className="mt-auto -mb-2 pt-4">
      {session.speakers?.map((speaker, index) => (
        <div key={index} className="flex items-center my-2">
          {speaker.image ? (
            <div className="w-6 h-6 mr-2 relative">
              <Image
                src={speaker.image.url}
                alt={speaker.image.alt}
                layout="fill"
                objectFit="cover"
                objectPosition="center center"
                className="rounded-full"
              />
            </div>
          ) : (
            <div className="w-6 h-6 mr-2 rounded-full bg-complementary-faded" />
          )}
          <p className="text-sm">{speaker.name}</p>
        </div>
      ))}
    </div>
  );
};

const getSessionStartTimes = (schedule: types.ScheduleSection): Date[] => {
  const startTimes: Record<string, Date> = {};
  for (const track of schedule.tracks) {
    for (const session of track.sessions) {
      const startTime = getTimeString(session.startTime);
      if (!(startTime in startTimes)) {
        startTimes[startTime] = normalizeDate(session.startTime);
      }
    }
  }
  return Object.values(startTimes).sort();
};

const getIntervalsFromFirstStartTime = (startTime: Date, time: Date): number => {
  const difference = differenceInMinutes(normalizeDate(time), startTime);
  return Math.floor(difference / SCHEDULE_ROW_INCREMENT);
};

const getIntervalsForDuration = (startTime: string, endTime: string): number => {
  const difference = getDurationInMinutes(startTime, endTime);
  return Math.floor(difference / SCHEDULE_ROW_INCREMENT);
};

const getDurationInMinutes = (startTime: string, endTime: string): number => {
  return differenceInMinutes(normalizeDate(endTime), normalizeDate(startTime));
};

const getTimeString = (date: Date | string): string => {
  if (typeof date === 'string') {
    date = new Date(date);
  }
  return format(date, 'H:mm aaa');
};

const normalizeDate = (date: Date | string): Date => {
  return new Date(`01-01-1970 ${getTimeString(date)}`);
};

export default ScheduleSection;
